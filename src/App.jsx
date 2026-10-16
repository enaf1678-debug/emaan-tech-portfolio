import { Button, Card } from "pixel-retroui";
import profileImage from "./assets/profile.png";
import "./App.css";
import { useState } from "react";
import portfolioProject from "./assets/portfolio-project.png";
import phpProject from "./assets/php-mysql-project.png";
import velvetBrewProject from "./assets/velvet-brew-project.png";
import cvFile from "./assets/Emaan-Fatima-CV.pdf";
import aiMascot from "./assets/ai-mascot.png";


const skills = [
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
];

const projects = [
  {
    title: "Portfolio Web Project",
    category: "Web Development",
    description:
      "A responsive personal portfolio project focused on presenting web development skills, projects, and professional information through a clean interface.",
    tools: "HTML • CSS • JavaScript",
    link: "https://github.com/enaf1678-debug/1-Project",
    image: portfolioProject,
  },
  {
    title: "PHP & MySQL Application",
    category: "Backend Development",
    description:
      "A PHP-based application using MySQL to demonstrate server-side development, database interaction, and dynamic web functionality.",
    tools: "PHP • MySQL • HTML • CSS",
    link: "https://github.com/enaf1678-debug/my-php-project",
    image: phpProject,
  },
  {
    title: "Velvet Brew",
    category: "Full-Stack Web Application",
    description:
      "A restaurant-focused web application built around a modern user experience and backend functionality.",
    tools: "Node.js • JavaScript • Web Technologies",
    link: "https://github.com/enaf1678-debug/velvet-brew",
    image: velvetBrewProject,
  },
];

const services = [
  {
    icon: "01",
    title: "Web Development",
    text: "Responsive and interactive websites and web applications built around real user needs.",
  },
  {
    icon: "02",
    title: "Data Analytics",
    text: "Turning raw data into meaningful insights, dashboards, reports, and business decisions.",
  },
  {
    icon: "03",
    title: "Data Science",
    text: "Exploring data and developing practical machine-learning and predictive solutions.",
  },
];

function App() {
    const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
const sendMessage = async () => {
  if (!message.trim() || loading) return;

  const userMessage = message.trim();

  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage },
  ]);

  setMessage("");
  setLoading(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    const data = await response.json();

    console.log("Backend response:", data);

    if (!response.ok) {
      throw new Error(data.error || "Server error");
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: data.answer || "AI returned no answer.",
      },
    ]);
  } catch (error) {
    console.error("Chat error:", error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: `AI Error: ${error.message}`,
      },
    ]);
  } finally {
    setLoading(false);
  }
};
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
      {/* Navigation */}
<header className="navbar">
  <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
    EF<span>.</span>
  </a>

  <button
    className="menu-toggle"
    type="button"
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <nav className={menuOpen ? "nav-open" : ""}>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </nav>

  <div className="navbar-socials">
    <a
      className="nav-github"
      href="https://github.com/enaf1678-debug"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>

    <a
      className="nav-linkedin"
      href="https://www.linkedin.com/in/emaan-fatima-bb61533b0"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn ↗
    </a>
  </div>
</header>


      {/* Hero */}
      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">WEB DEVELOPER × DATA PROFESSIONAL</p>

            <h1>
              I build with <span>code.</span>
              <br />
              I think with <span>data.</span>
            </h1>

            <p className="hero-description">
              I'm <strong>Emaan Fatima</strong>, a Data-Driven Web Developer
              and Data Analyst/Scientist who turns raw data into actionable
              insights and intuitive digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects">
                <Button
                  bg="#111111"
                  textColor="#ffffff"
                  borderColor="#111111"
                  shadow="#aa3bff"
                >
                  View My Work →
                </Button>
              </a>

              <a href="#contact">
                <Button
                  bg="#fefcd0"
                  textColor="#111111"
                  borderColor="#111111"
                  shadow="#aa3bff"
                >
                  Hire Me
                </Button>
              </a>
            </div>

            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/emaan-fatima-bb61533b0"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <span>•</span>
              <a
                href="https://github.com/enaf1678-debug"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Retro visual */}
          {/* Profile visual */}
<div className="hero-art">
  <div className="profile-card">
    <div className="profile-card-top">
      <span></span>
      <span></span>
      <span></span>
      <small>emaan.exe</small>
    </div>

    <div className="profile-photo-wrap">
      <img
        src={profileImage}
        alt="Emaan Fatima"
        className="profile-photo"
      />
    </div>

    <div className="profile-caption">
      <strong>Emaan Fatima</strong>
    </div>

    <div className="floating-badge badge-one">DATA</div>
    <div className="floating-badge badge-two">CODE</div>
    <div className="floating-badge badge-three">AI</div>
  </div>
</div>
</section>


        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span>02 / TOOLKIT</span>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>

          <div className="skill-categories">
            <div>
              <span>WEB DEVELOPMENT</span>
              <p>HTML • CSS • JavaScript • PHP • React • Node.js</p>
            </div>

            <div>
              <span>DATA & ANALYTICS</span>
              <p>MySQL • Excel • Tableau • Data Analysis</p>
            </div>

            <div>
              <span>PROGRAMMING</span>
              <p>JavaScript • PHP • C++</p>
            </div>
          </div>
        </section>

        {/* About */}
<section id="about" className="section about-section">

  <div className="about-focus">
    <div className="section-heading">
      <span>02 / ABOUT ME</span>
      <h2>Three ways I turn ideas into solutions.</h2>
    </div>

    <div className="focus-grid">

      <div className="focus-card">
        <span className="focus-number">01</span>
        <h3>BUILD</h3>
        <p>
          I create responsive and user-focused web experiences that turn
          ideas into working products.
        </p>
      </div>

      <div className="focus-card">
        <span className="focus-number">02</span>
        <h3>ANALYZE</h3>
        <p>
          I work with data to discover patterns, organize information,
          and transform numbers into meaningful insights.
        </p>
      </div>

      <div className="focus-card">
        <span className="focus-number">03</span>
        <h3>EXPLORE</h3>
        <p>
          I'm exploring AI and modern technologies to find smarter ways
          of solving real-world problems.
        </p>
      </div>

    </div>
  </div>

  <div className="toolkit">
    <div className="section-heading">
      <span>MY TOOLKIT</span>
      <h2>Technologies I use.</h2>
    </div>

    <div className="toolkit-grid">

      <div className="toolkit-card">
        <span>WEB</span>
        <p>HTML • CSS • JavaScript • React • PHP • Node.js</p>
      </div>

      <div className="toolkit-card">
        <span>DATA</span>
        <p>Python • SQL • MySQL • Excel • Tableau</p>
      </div>

      <div className="toolkit-card">
        <span>TOOLS</span>
        <p>Git • GitHub • VS Code</p>
      </div>

    </div>
  </div>

  <div className="about-cta">
    <span>LET'S BUILD SOMETHING MEANINGFUL</span>

    <h2>
      Have an idea? Let's turn it into something people can experience.
    </h2>

    <p>
      Whether it's a website, a data solution, or something completely new,
      I'm always interested in creating useful digital experiences.
    </p>

    <div className="about-buttons">
      <a href="#contact">
        <Button
          bg="#fefcd0"
          textColor="#111111"
          borderColor="#111111"
          shadow="#aa3bff"
        >
          Let's Talk →
        </Button>
      </a>

      <a href={cvFile} target="_blank" rel="noreferrer">
        <Button
          bg="#ffffff"
          textColor="#111111"
          borderColor="#111111"
          shadow="#ffd666"
        >
          Download CV →
        </Button>
      </a>
    </div>
  </div>

</section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span>03 / SELECTED WORK</span>
            <h2>Things I've built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card className="project-card" key={project.title}>
                <div className="project-image">
                  <div className="project-number">
                    0{index + 1}
                  </div>

                 <img
  src={project.image}
  alt={project.title}
  className="project-image-photo"
/>
  </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tools">{project.tools}</div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section services-section">
          <div className="section-heading">
            <span>04 / SERVICES</span>
            <h2>What I can build for you.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Card className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* AI teaser */}
        <section className="ai-section">
          <div className="ai-orb">AI</div>

          <div>
            <span className="eyebrow">COMING NEXT</span>
            <h2>Ask Emaan AI.</h2>
            <p>
              Have a question about my skills, projects, experience, or
              services? My AI assistant will be able to answer visitors in
              real time.
            </p>
          </div>

  <Button
  bg="#fefcd0"
  textColor="#111111"
  borderColor="#111111"
  shadow="#ffffff"
  onClick={() => setChatOpen(true)}
>
  AI Assistant →
</Button>
  </section>

{chatOpen && (
  <div className="ai-chat">
    <div className="ai-chat-header">
      <strong>Emaan AI Assistant</strong>

      <button onClick={() => setChatOpen(false)}>
        ×
      </button>
    </div>

  <div className="ai-messages">

  {messages.length === 0 && (
    <div className="ai-welcome">
      <img
        src={aiMascot}
        alt="Emaan AI Assistant"
        className="ai-mascot"
      />

      <div>
        <strong>Hi! I'm Emaan AI 👋</strong>
        <p>
          Ask me about Emaan's skills, projects, services, or experience.
        </p>
      </div>
    </div>
  )}

  {messages.map((msg, index) => (
    <div
      key={index}
      className={`ai-message ${msg.role}`}
    >
      {msg.text}
    </div>
  ))}

</div>

    <div className="ai-input">
      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  </div>
)}

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <span className="eyebrow">05 / LET'S WORK TOGETHER</span>

            <h2>
              Have a project
              <br />
              in mind?
            </h2>

            <p>
              Let's turn your idea, data, or business problem into a useful
              digital experience.
            </p>

            <a href="mailto:your-email@example.com">
              <Button
                bg="#aa3bff"
                textColor="#ffffff"
                borderColor="#111111"
                shadow="#111111"
              >
                Start a Conversation →
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
  <div className="footer-main">
    <strong>EMAN FATIMA<span>.</span></strong>

    <p className="footer-title">
      Data-Driven Web Developer & Data Professional
    </p>

    <p className="footer-description">
      I build modern web experiences and use data to create
      practical, user-focused digital solutions.
    </p>

    <p className="footer-focus">
      Web Development • Data Analytics • Data Science • AI
    </p>
  </div>

  <div className="footer-links">
    <a
      href="https://www.linkedin.com/in/emaan-fatima-bb61533b0"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn ↗
    </a>

    <a
      href="https://github.com/enaf1678-debug"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>
  </div>

  <div className="footer-bottom">
    <small>© 2026 Emaan Fatima</small>
    <small>Built with React + RetroUI.</small>
  </div>
</footer>
    </div>
  );
}
export default App;