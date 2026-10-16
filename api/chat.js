
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const portfolioInfo = `
You are the AI portfolio assistant for Emaan Fatima.

PROFESSIONAL PROFILE:
Emaan is a Data-Driven Web Developer and Data Analyst/Scientist.
She works on combining web technologies with data-driven digital experiences.

SKILLS:
HTML, CSS, JavaScript, PHP, MySQL, React, Node.js, Excel, Tableau, C++.

PROJECTS:
1. Personal portfolio website.
2. PHP and MySQL project.
3. Velvet Brew cafe website.

SERVICES:
Web development, data analytics, and data-driven digital experiences.

LINKS:
GitHub: https://github.com/enaf1678-debug
LinkedIn: https://www.linkedin.com/in/emaan-fatima-bb61533b0

INSTRUCTIONS:
- Answer questions about Emaan using the information above.
- Give natural, friendly, professional, and relevant answers.
- Understand differently worded questions about the same topic.
- If asked about skills, explain relevant skills.
- If asked about projects, describe only known project details.
- Never invent education, employment history, achievements, or personal facts.
- If information is missing, politely say it is not listed in the portfolio.
- Keep answers clear and concise.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { message } = req.body || {};

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "Please enter a message.",
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: portfolioInfo,
        },
        {
          role: "user",
          content: message.trim(),
        },
      ],
    });

    const answer =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn't generate an answer. Please try again.";

    return res.status(200).json({ answer });
  } catch (error) {
    console.error("Portfolio assistant error:", error.message);

    return res.status(500).json({
      error: "The assistant is temporarily unavailable. Please try again.",
    });
  }
}
