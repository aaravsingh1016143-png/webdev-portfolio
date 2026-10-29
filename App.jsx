import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Download, Github, Linkedin, Mail, Menu, Palette, Send, Sparkles,
  X, GraduationCap, MapPin
} from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 85, color: "violet" },
  { name: "JavaScript", level: 70, color: "blue" },
  { name: "React", level: 65, color: "pink" },
  { name: "SQL", level: 60, color: "green" },
  { name: "Power BI", level: 55, color: "orange" },
  { name: "Python", level: 50, color: "cyan" },
];

const projects = [
  {
    number: "01",
    type: "WEB DEVELOPMENT",
    title: "Personal Portfolio",
    description: "A responsive portfolio to introduce my work, highlight my skills, and make it easy to get in touch.",
    tags: ["React", "CSS", "Responsive UI"],
    link: "#contact",
    accent: "purple",
  },
  {
    number: "02",
    type: "DATA ANALYTICS",
    title: "Sales Dashboard",
    description: "A sample analytics concept for exploring sales performance, trends, and key business metrics.",
    tags: ["Power BI", "Excel", "Data"],
    link: "#contact",
    accent: "blue",
  },
  {
    number: "03",
    type: "DATABASE",
    title: "Student Records",
    description: "A practice project concept for organising student records and answering questions with SQL queries.",
    tags: ["SQL", "Data Modelling", "Analysis"],
    link: "#contact",
    accent: "pink",
  },
];

const initialForm = { name: "", email: "", message: "" };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [formMessage, setFormMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFormMessage("");
  };

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    // Replace this address with your real email before publishing.
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    setFormMessage("Your email app should open with your message. Add your real email address in src/App.jsx first.");
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="WebDev Portfolio home">
          <span className="brand-mark">R<span>.</span></span>
          <span>webdev portfolio<span className="brand-dot">/</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Turning ideas into <span className="gradient-text">digital experiences.</span></h1>
            <p className="hero-lead">
              Hey, I’m <strong>Your Name</strong> — an aspiring developer and data enthusiast
              who loves building useful things and learning something new every day.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="#contact"><Mail size={17} /> Get in touch</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Jharkhand, India</span>
              <span className="meta-separator" />
              <span><Sparkles size={15} /> Always learning</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative developer profile card">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-top"><span className="window-dots"><i /><i /><i /></span><span>profile.jsx</span><Code2 size={16} /></div>
              <div className="avatar-placeholder"><span>R</span><div className="avatar-spark">✦</div></div>
              <div className="profile-name">WebDev <span className="verified">✦</span></div>
              <p className="profile-role">Developer in progress</p>
              <div className="profile-divider" />
              <div className="code-line"><span className="code-purple">const</span> <span className="code-blue">mindset</span> = <span className="code-green">"keep building"</span>;</div>
              <div className="code-line"><span className="code-purple">const</span> <span className="code-blue">goal</span> = <span className="code-green">"make an impact"</span>;</div>
              <div className="profile-pills"><span>React</span><span>Data</span><span>Curiosity</span></div>
            </div>
            <div className="float-chip chip-code"><Code2 size={17} /> Clean code</div>
            <div className="float-chip chip-design"><Palette size={17} /> Creative thinking</div>
          </div>
          <a className="scroll-hint" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section section-block" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>A little about <span className="gradient-text">me.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">Curious mind. Practical learner. <span className="muted">Big goals.</span></p>
              <p>I’m building my foundation in web development and data analytics. I enjoy breaking down problems, learning by doing, and turning small ideas into projects that people can actually use.</p>
              <p>This portfolio is my space to share the journey — the things I’m learning, the projects I’m creating, and the goals I’m working toward.</p>
              <a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="info-cards">
              <article className="info-card"><div className="info-icon purple-icon"><Code2 size={20} /></div><div><h3>Web Development</h3><p>Learning to build useful, responsive websites.</p></div></article>
              <article className="info-card"><div className="info-icon blue-icon"><BriefcaseBusiness size={20} /></div><div><h3>Problem Solving</h3><p>Exploring practical solutions through code and data.</p></div></article>
              <article className="info-card"><div className="info-icon pink-icon"><GraduationCap size={20} /></div><div><h3>Continuous Learning</h3><p>Improving my skills one project at a time.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading">
            <span className="section-index">02 / SKILLS</span>
            <h2>Tools I’m <span className="gradient-text">working with.</span></h2>
            <p className="section-subtitle">These are editable example skill levels. Update them to reflect your real experience.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-top"><span>{skill.name}</span><span className="skill-level">{skill.level}%</span></div>
                <div className="skill-track"><div className={`skill-fill ${skill.color}`} style={{ width: `${skill.level}%` }} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading projects-heading">
            <div><span className="section-index">03 / SELECTED WORK</span><h2>Projects with <span className="gradient-text">purpose.</span></h2></div>
            <p className="section-subtitle">Practice concepts to customise with your own completed work.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><a href={project.link} aria-label={`Ask about ${project.title}`}><ArrowUpRight size={19} /></a></div>
                <div className="project-visual" aria-hidden="true">
                  {project.accent === "purple" && <div className="visual-browser"><div className="visual-browser-top"><i /><i /><i /></div><div className="visual-browser-body"><div className="visual-line wide" /><div className="visual-line" /><div className="visual-blocks"><i /><i /><i /></div></div></div>}
                  {project.accent === "blue" && <div className="chart-visual"><div className="chart-bar bar-one" /><div className="chart-bar bar-two" /><div className="chart-bar bar-three" /><div className="chart-bar bar-four" /><div className="chart-bar bar-five" /></div>}
                  {project.accent === "pink" && <div className="database-visual"><div className="db-row db-head"><i /><i /><i /></div><div className="db-row"><i /><i /><i /></div><div className="db-row"><i /><i /><i /></div><div className="db-row"><i /><i /><i /></div></div>}
                </div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block journey-section" id="journey">
          <div className="section-heading">
            <span className="section-index">04 / MY JOURNEY</span>
            <h2>Learning by <span className="gradient-text">doing.</span></h2>
          </div>
          <div className="journey-card">
            <div className="journey-icon"><GraduationCap size={22} /></div>
            <div><span className="journey-date">CURRENT FOCUS</span><h3>Building skills & real-world projects</h3><p>Practising frontend development, data tools, and problem-solving. Add your actual college, degree, certifications, and experience here.</p></div>
            <span className="journey-badge">In progress</span>
          </div>
        </section>

        <section className="section-wrap contact-section section-block" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="section-index">05 / CONTACT</span>
              <h2>Have an idea?<br /><span className="gradient-text">Let’s talk.</span></h2>
              <p>Open to learning opportunities, collaborations, and conversations. Send me a message and let’s connect.</p>
              <a className="contact-email" href="mailto:your.email@example.com"><Mail size={18} /> your.email@example.com</a>
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Enter your name" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Tell me what you have in mind..." rows="4" required />
              <button className="button button-primary submit-button" type="submit">Prepare message <Send size={16} /></button>
              {formMessage && <p className="form-note" role="status">{formMessage}</p>}
              <p className="form-note">This form opens your email app; it does not send data to a server.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">R<span>.</span></span><span>webdev portfolio<span className="brand-dot">/</span></span></a>
        <p>A personal web developer portfolio.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} WebDev Portfolio</span>
      </footer>
    </div>
  );
}

export default App;