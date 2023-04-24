const { createConnection } = require('mysql2/promise');

async function saveHighlight(pageUrl, text, startOffset, endOffset, user_id, color, xpath) {
	const connection = await createConnection({
		host: process.env.RDS_HOST,
		user: process.env.RDS_USER,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB
	});

	console.log("Connection: ", connection);

	const query1 = `INSERT INTO Highlights (page_url, highlighted_text, start_offset, end_offset, created_at, userId, color, xpath) VALUES ('${pageUrl}', '${text}', '${startOffset}', '${endOffset}', NOW(), '${user_id}', '${color}', '${xpath}');`;
	await connection.execute(query1);
	await connection.end();

	return;
}

exports.handler = async (event, context) => {
	const pageUrl = event.queryStringParameters.url;
	const text = event.queryStringParameters.text;
	const startOffset = event.queryStringParameters.start;
	const endOffset = event.queryStringParameters.end;
	const user_id = event.queryStringParameters.userId;
	const color = event.queryStringParameters.color;
	const xpath = event.queryStringParameters.xpath;
	await saveNote(pageUrl, text, startOffset, endOffset, user_id, color, xpath);

	
	console.log(pageUrl);
	console.log(text);
	console.log(startOffset);
	console.log(endOffset);
	console.log(user_id);
	console.log(color);
	console.log(xpath);

	return {
		statusCode: 200,
	};
}
