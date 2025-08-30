import { Handler } from "@netlify/functions";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NETLIFY_DATABASE_URL!);

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, message, useCase } = JSON.parse(event.body || "{}");

    if (!name || !email || !message || !useCase) {
      return { statusCode: 400, body: "Missing required fields" };
    }

    await sql`
      INSERT INTO contacts (name, email, message, use_case, created_at)
      VALUES (${name}, ${email}, ${message}, ${useCase}, NOW())
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err: any) {
    console.error("SaveContact Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
