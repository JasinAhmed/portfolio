import './Projects.css'

// Iedere kaart krijgt een eigen kleur.
// Bron: mijn CSS attr() experiment uit de Random-chat.
const projects = [
  {
    number: '01',
    title: 'Daily Journal',
    description:
      'My learning journal, where I document what I explore and learn during my studies.',
    image: '/images/daily-journal.png',
    imageAlt: 'My Daily Journal website',
    color: '#e4e8dc',
    link: 'https://jasinahmed.github.io/i-love-web/',
    linkText: 'View journal',
    category: 'Learning / Documentation',
  },
  {
    number: '02',
    title: 'Funda',
    description:
      'A project for Funda. Explore the repository to see the code and project documentation.',
    image: '/images/funda.png',
    imageAlt: 'A preview of my Funda project',
    color: '#f3e4d3',
    link: 'https://github.com/JasinAhmed/proof-of-concept',
    linkText: 'View repository',
    category: 'Frontend development',
  },
  {
    number: '03',
    title: 'AdConnect',
    description:
      'A team project for AdConnect. Explore the shared repository to see the code and project documentation.',
    image: '/images/adconnect.png',
    imageAlt: 'A preview of the AdConnect project',
    color: '#e4e4f0',
    link: 'https://github.com/Tjeerd-JW/pleasurable-ui',
    linkText: 'View repository',
    category: 'Team project / Frontend development',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <header className="projects-header">
        <div>
          <p className="projects-label">01 / Selected work</p>
          <h2>Made while learning.</h2>
        </div>

        <p className="projects-caption">
          Small projects. Real progress.
        </p>
      </header>

      <div className="projects-grid">
        {/* Met map gebruik ik dezelfde opbouw voor ieder project. */}
        {projects.map((project) => (
          <article className="project" key={project.number}>
            {/* CSS leest de achtergrondkleur uit data-color. */}
            <a
              className="project-preview"
              href={project.link}
              data-color={project.color}
            >
              <span className="project-number">
                {project.number} — {project.title}
              </span>

              <img
                src={project.image}
                alt={project.imageAlt}
                width="960"
                height="720"
                loading="lazy"
              />

              <span className="project-technologies">
                {project.category}
              </span>
            </a>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="project-links">
                <li>
                  <a href={project.link}>
                    {project.linkText} <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}