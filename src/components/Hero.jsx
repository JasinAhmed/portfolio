import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-role">Front-end development student</p>

      <h1 className="hero-name">Jasin Ahmed</h1>

      <p className="hero-description">
        I’m 21 and study Frontend Design &amp; Development at FDND.
        I’m looking for a front-end internship where I can build websites
        with a team.
      </p>

      <a className="hero-link" href="#projects">
        View my work <span className="hero-link-arrow">↓</span>
      </a>
    </section>
  )
}