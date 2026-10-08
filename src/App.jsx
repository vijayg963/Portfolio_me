import './App.css'

const skills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'SCSS', 'Tailwind CSS', 'React Query', 'Zustand', 'GraphQL', 'Node.js',
  'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'
]

const experience = [
  {
    period: '2024 – Present',
    role: 'Software Engineer',
    description:
      'Building scalable web applications, reusable frontend systems, API-driven experiences, and production-ready interfaces across the full development lifecycle.'
  },
  {
    period: '2024 – 2025',
    role: 'React Manager',
    description:
      'Led React-focused development, frontend architecture, reusable UI patterns, and collaboration around complex product requirements.'
  },
  {
    period: '2022 – 2024',
    role: 'MERN Stack Developer',
    description:
      'Built frontend-heavy MERN applications with React, TypeScript, Node.js, REST APIs, MongoDB, and responsive UI systems.'
  },
  {
    period: '2021 – 2022',
    role: 'React Developer',
    description:
      'Started professional development in 2021, creating responsive React applications and strengthening core JavaScript and frontend engineering skills.'
  }
]

const projects = [
  {
    title: 'Audio Advertising Platform',
    stack: 'React · TypeScript · Custom Editors',
    description:
      'Worked on an audio advertising experience including custom audio/banner editing, playback controls, tone and smoothness configuration, and product-focused UI workflows.'
  },
  {
    title: 'LMS & Admin Platform',
    stack: 'Next.js · Turborepo · TypeScript',
    description:
      'Built reusable UI components and dashboard experiences for learning workflows, saved programs, bookmarks, and API-driven product features.'
  },
  {
    title: 'ResumeMaker',
    stack: 'React · JavaScript · CSS',
    description:
      'A web application focused on creating and managing resumes through a simple, user-friendly interface.',
    href: 'https://github.com/vijayg963/ResumeMaker'
  },
  {
    title: 'NextAppMERN',
    stack: 'Next.js · MERN',
    description:
      'A full-stack application project exploring modern React/Next.js patterns with a MERN-oriented backend.',
    href: 'https://github.com/vijayg963/NextAppMERN'
  },
  {
    title: 'GraphQL',
    stack: 'GraphQL · React',
    description:
      'Frontend-focused GraphQL practice covering API querying and modern data-fetching patterns.',
    href: 'https://github.com/vijayg963/Grphql'
  },
  {
    title: 'Vibe Now Dashboard',
    stack: 'React · Modern Frontend',
    description:
      'A dashboard-oriented project demonstrating component-driven UI development and frontend application structure.',
    href: 'https://github.com/vijayg963/vibe-now-dashboard'
  }
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Vijay Gupta home">VG<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="https://www.linkedin.com/in/vijayg963/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">SENIOR FRONTEND ENGINEER · INDIA</p>
            <h1>Building fast, scalable interfaces that feel <em>effortless.</em></h1>
            <p className="hero-text">
              I’m Vijay Gupta, a frontend-focused software engineer with <strong>5+ years of professional development experience since 2021</strong>.
              I build production web applications with React, Next.js, TypeScript, and JavaScript, with hands-on experience across APIs, cloud, testing, and architecture.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View my work ↓</a>
              <a className="button secondary" href="https://www.linkedin.com/in/vijayg963/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="status"><span /> Available for opportunities</div>
            <div className="code-window">
              <span>const</span> engineer = {'{'}
              <br />&nbsp;&nbsp;focus: <b>"frontend"</b>,
              <br />&nbsp;&nbsp;experience: <b>"5+ years"</b>,
              <br />&nbsp;&nbsp;stack: <b>"React + Next + TS"</b>,
              <br />&nbsp;&nbsp;mindset: <b>"build & improve"</b>
              <br />{'}'}
            </div>
          </aside>
        </section>

        <section className="metrics section">
          <div><strong>5+</strong><span>Years building software</span></div>
          <div><strong>React</strong><span>Frontend specialization</span></div>
          <div><strong>Next.js</strong><span>Modern web applications</span></div>
          <div><strong>Full-stack</strong><span>Beyond the UI</span></div>
        </section>

        <section id="about" className="section split">
          <div><p className="eyebrow">01 · ABOUT</p><h2>Frontend first.<br /><em>Engineering always.</em></h2></div>
          <div className="prose">
            <p>
              I enjoy turning complex product requirements into clean, accessible, maintainable interfaces. My strongest area is frontend engineering, while my full-stack background helps me understand APIs, data, deployment, and the systems behind the UI.
            </p>
            <p>
              I care about reusable components, performance, developer experience, testing, and pragmatic architecture. I’m especially interested in React/Next.js applications that need to scale without becoming difficult to maintain.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading"><div><p className="eyebrow">02 · EXPERIENCE</p><h2>Career journey</h2></div><p>Professional development since 2021.</p></div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period + item.role}>
                <span className="timeline-dot" />
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading"><div><p className="eyebrow">03 · SELECTED WORK</p><h2>Things I’ve built</h2></div><p>A mix of product work and personal engineering projects.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href && <a href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <p className="eyebrow">04 · TOOLKIT</p>
          <h2>Technologies I work with</h2>
          <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">05 · CONTACT</p>
          <h2>Let’s build something<br /><em>worth shipping.</em></h2>
          <p>Open to frontend and full-stack opportunities where I can solve meaningful product and engineering problems.</p>
          <div className="actions">
            <a className="button primary" href="mailto:vijayg963@gmail.com">Email me ↗</a>
            <a className="button secondary" href="https://github.com/vijayg963" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Vijay Gupta</span><span>React · Next.js · TypeScript</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
