import './Projects.css'

const projects = [
  {
    title: 'Funda',
    description: 'A website for browsing homes and viewing property details.',
    website: 'https://proof-of-concept-uuxw.onrender.com',
    repository: 'https://github.com/JasinAhmed/proof-of-concept',
  },
  {
    title: 'Prologg for Legal',
    description:
      'A team website that explains how workers can safely collect evidence of workplace exploitation.',
    website: 'https://prologglaw.netlify.app/',
    repository: 'https://github.com/fdnd-agency/prologg',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Selected work</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="project-links">
              <li>
                <a href={project.website}>
                  Visit {project.title} ↗
                </a>
              </li>
              <li>
                <a href={project.repository}>
                  GitHub repo ↗
                </a>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}