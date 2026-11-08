import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-role">Front-end development student</p>

      <h1 className="hero-name">Jasin Ahmed</h1>

      <p className="hero-description">
        I’m 21 and study Frontend Design &amp; Development. I’ve built
        projects with HTML, CSS and SvelteKit, and I’m using this
        portfolio to learn React. I’m looking for a front-end internship
        where I can build websites with a team.
      </p>

      <a className="hero-link" href="#projects">
        View my projects
      </a>
    </section>
  )
}