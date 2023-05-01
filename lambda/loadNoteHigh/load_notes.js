const { createConnection } = require('mysql2/promise');

async function loadNoteHigh(user_id, pageUrl, xpath) {
    const connection = await createConnection({
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB
    });

    const query = `
    SELECT start_offset, end_offset
    FROM Highlights
    WHERE page_url = ? AND xpath = ?;
    `;

    const [results] = await connection.execute(query, [pageUrl, xpath]);

    await connection.end();

    return results;
}

exports.handler = async (event, context) => {
    const user_id = event.queryStringParameters.userId;
    const pageUrl = event.queryStringParameters.url;
    const xpath = event.queryStringParameters.xpath;

    const results = await loadNoteHigh(user_id, pageUrl, xpath);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: results
    };
}
