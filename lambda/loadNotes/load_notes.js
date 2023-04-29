const { createConnection } = require('mysql2/promise');

async function saveNote(user_id, username, noteText, pageUrl, text, startOffset, endOffset, color, xpath) {
	const connection = await createConnection({
		host: process.env.RDS_HOST,
		user: process.env.RDS_USER,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB
	});

	console.log("Connection: ", connection);

	const checkUser = `SELECT COUNT(*) FROM Users WHERE user_id = '${user_id}';`;
	const check = await connection.execute(checkUser);
	console.log("Found Users: ", check);

	if (check) {
		const query = `INSERT INTO Users (username, user_id) VALUES ('${username}', '${user_id}');`;
		await connection.execute(query);
	}

	const query1 = `INSERT INTO Highlights (page_url, highlighted_text, start_offset, end_offset, created_at, userId, color, xpath) VALUES ('${pageUrl}', '${text}', '${startOffset}', '${endOffset}', NOW(), '${user_id}', '${color}', '${xpath}');`;
	const query2 = `INSERT INTO Notes (userId, highlight_id, text, created_at) VALUES ('${user_id}', (SELECT id FROM Highlights WHERE page_url = '${pageUrl}' AND highlighted_text = '${text}'), '${noteText}', NOW());`;
	await connection.execute(query1);
	await connection.execute(query2);

	await connection.end();

	return;
}

exports.handler = async (event, context) => {
	const user_id = event.queryStringParameters.userId;
	const pageUrl = event.queryStringParameters.url;
	const xpath = event.queryStringParameters.xpath;

	await saveNote(user_id, pageUrl, );

	return {
		statusCode: 200
	};
}
