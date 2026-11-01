import './Projects.css'

// Iedere kaart krijgt een eigen kleur.
// Bron: mijn CSS attr() experiment uit de Random-chat.
const projects = [
  {
    number: '01',
    title: 'Daily Journal',
    description:
      'My learning journal, where I document what I explore and learn during my studies.',
    image: 'public/daily-journal.png',
    imageAlt: 'My Daily Journal with daily notes and learning activities',
    color: '#e4e8dc',
    link: 'https://jasinahmed.github.io/i-love-web/',
    linkText: 'View journal',
    category: 'Learning / Documentation',
  },
  {
    number: '02',
    title: 'Funda',
    description:
      'A housing website with property listings and detail pages. Explore the live website or view the code and documentation on GitHub.',
    image: 'public/funda.png',
    imageAlt: 'My Funda project showing property listings with photos and prices',
    color: '#f3e4d3',
    link: 'https://proof-of-concept-uuxw.onrender.com',
    linkText: 'View website',
    github: 'https://github.com/JasinAhmed/proof-of-concept',
    category: 'Frontend development',
  },
  {
    number: '03',
    title: 'AdConnect',
    description:
      'A team project for a platform about Associate degrees, featuring news, events and information about the programmes.',
    image: 'public/adconnect.png',
    imageAlt: 'The AdConnect homepage introducing the platform for Associate degrees',
    color: '#e4e4f0',
    link: 'https://pleasurable-ui-vyle.onrender.com/',
    linkText: 'View website',
    github: 'https://github.com/Tjeerd-JW/pleasurable-ui',
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

                {/* Alleen tonen als het project een GitHub-link heeft. */}
                {project.github && (
                  <li>
                    <a href={project.github}>
                      GitHub <span>↗</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}