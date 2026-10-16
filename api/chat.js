
const emaanInfo = {
  name: "Emaan Fatima",
  role: "Data-Driven Web Developer and Data Analyst/Scientist",
  skills: [
    "HTML", "CSS", "JavaScript", "PHP", "MySQL",
    "React", "Node.js", "Excel", "Tableau", "C++"
  ],
  projects: [
    "Portfolio/Web project",
    "PHP project",
    "Velvet Brew project"
  ],
  services: [
    "Web development",
    "Data analytics",
    "Data-driven digital experiences"
  ]
};

function createAnswer(message) {
  const question = message.toLowerCase();

  if (question.includes("skill")) {
    return `Emaan's skills include ${emaanInfo.skills.join(", ")}.`;
  }

  if (question.includes("project")) {
    return `Emaan's projects include ${emaanInfo.projects.join(", ")}.`;
  }

  if (question.includes("service")) {
    return `Emaan offers ${emaanInfo.services.join(", ")}.`;
  }

  if (
    question.includes("about") ||
    question.includes("who is") ||
    question.includes("background")
  ) {
    return `Emaan Fatima is a ${emaanInfo.role}.`;
  }

  if (/\b(hi|hello|hey)\b/.test(question)) {
    return "Hi! Ask me about Emaan's skills, projects, or services.";
  }

  return "You can ask me about Emaan's skills, projects, services, or background.";
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  return res.status(200).json({
    answer: createAnswer(message.trim())
  });
}
