
import { GoogleGenAI } from "@google/genai";

const portfolioInfo = `
You are the AI portfolio assistant for Emaan Fatima.

PROFILE:
Emaan is a Data-Driven Web Developer and Data Analyst/Scientist.

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

RULES:
- Answer portfolio-related questions naturally and professionally.
- Do not invent personal details or achievements.
- If information is unavailable, say it is not listed in the portfolio.
- Keep answers concise and friendly.
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
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message.trim(),
      config: {
        systemInstruction: portfolioInfo,
      },
    });

    return res.status(200).json({
      answer: response.text || "Please try asking another question.",
    });
  } catch (error) {
    console.error("Gemini assistant error:", error.message);

    return res.status(500).json({
      error: "AI Assistant is temporarily unavailable. Please try again.",
    });
  }
}

