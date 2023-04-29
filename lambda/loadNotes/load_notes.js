const { createConnection } = require('mysql2/promise');

async function saveNote(user_id, pageUrl, xpath) {
    const connection = await createConnection({
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB
    });

    const query = `
    SELECT n.text AS note_text, h.highlighted_text, u.username, n.created_at AS note_created_at
    FROM Notes n
    JOIN Highlights h ON n.highlight_id = h.id
    JOIN Users u ON n.userId = u.user_id
    WHERE h.page_url = ? AND h.xpath = ?
    ORDER BY h.end_offset`;

    const [results] = await connection.execute(query, [pageUrl, xpath]);

    await connection.end();

    let notesHtml = '';

    for (const result of results) {
        notesHtml += `
      <div class="note-container">
        <span class="note-highlight">Highlighted Text:</span> ${result.highlighted_text}
        <br>
        <span class="note-content">Note Content:</span> ${result.note_text}
        <br>
        <span class="note-username">Username:</span> ${result.username}
        <br>
        <span class="note-created-at">Created At:</span> ${result.note_created_at}
      </div>`;
    }

    return notesHtml;
}

exports.handler = async (event, context) => {
    const user_id = event.queryStringParameters.userId;
    const pageUrl = event.queryStringParameters.url;
    const xpath = event.queryStringParameters.xpath;

    const html = await saveNote(user_id, pageUrl, xpath);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: html
    };
}
