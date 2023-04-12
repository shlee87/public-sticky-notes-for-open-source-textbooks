const { createConnection } = require('mysql2/promise');

async function queryUsername(user_id) {
	const connection = await createConnection({
		host: process.env.RDS_HOST,
		user: process.env.RDS_USER,
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DB
	});

	const query = `SELECT username FROM Users WHERE user_id = '%${user_id}';`
	const [rows] = await connection.execute(query);

	await connection.end();

	return rows.username

}

exports.handler = async (event, context) => {
	const user_id = event.queryStringParameters.userId;;
	const results = await queryUsername(user_id);

	return {
		statusCode: 200,
		body: results
	};
}
