import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

const emaanInfo = {
  name: "Emaan Fatima",

  role: "Data-Driven Web Developer and Data Analyst/Scientist",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "React",
    "Node.js",
    "Excel",
    "Tableau",
    "C++",
  ],

  interests: [
    "Web development",
    "Data analytics",
    "Data science",
  ],

  projects: [
    "Portfolio/Web project",
    "PHP project",
    "Velvet Brew project",
  ],

  services: [
    "Web development",
    "Data analytics",
    "Data-driven digital experiences",
  ],
};

function createAnswer(message) {
  const question = message.toLowerCase();

  if (
    question.includes("skill") ||
    question.includes("skills") ||
    question.includes("know")
  ) {
    return `Emaan's skills include ${emaanInfo.skills.join(
      ", "
    )}.`;
  }

  if (
    question.includes("project") ||
    question.includes("projects") ||
    question.includes("built")
  ) {
    return `Emaan's projects include ${emaanInfo.projects.join(
      ", "
    )}.`;
  }

  if (
    question.includes("service") ||
    question.includes("services") ||
    question.includes("offer")
  ) {
    return `Emaan offers services related to ${emaanInfo.services.join(
      ", "
    )}.`;
  }

  if (
    question.includes("about") ||
    question.includes("who is") ||
    question.includes("tell me about") ||
    question.includes("background")
  ) {
    return `Emaan Fatima is a ${emaanInfo.role}. She combines web development, data analytics, and data science interests to create useful digital experiences.`;
  }

  if (
    question.includes("web") ||
    question.includes("website") ||
    question.includes("developer")
  ) {
    return `Emaan works with web technologies including HTML, CSS, JavaScript, PHP, React, and Node.js.`;
  }

  if (
    question.includes("data") ||
    question.includes("analytics") ||
    question.includes("analyst")
  ) {
    return `Emaan's data and analytics toolkit includes MySQL, Excel, Tableau, and data analysis, along with interests in data science.`;
  }

  if (
    question.includes("hello") ||
    question.includes("hi") ||
    question.includes("hey")
  ) {
    return `Hi! I'm Emaan's portfolio assistant. You can ask me about her skills, projects, services, or background.`;
  }

  return `I can tell you about Emaan's skills, projects, services, web development, data analytics, or professional background.`;
}

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  console.log("Message received:", message);

  if (!message) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  const answer = createAnswer(message);

  res.json({
    answer,
  });
});

app.listen(PORT, () => {
  console.log(`Free local AI assistant running at http://localhost:${PORT}`);
});