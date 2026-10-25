import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero-name">
        JASIN AHMED<span>.</span>
      </h1>

      <div className="hero-content">
        <div className="hero-introduction">
          <p className="hero-status">
            Looking for an internship
          </p>

          <h2>
            A front-end developer
            <br />
            with more to explore.
          </h2>

          <p className="hero-description">
            I’m 21, I enjoy trying new things, and I learn by building.
            Currently working with SvelteKit and learning React.
          </p>

          <a className="hero-link" href="#projects">
            Explore my work <span>↓</span>
          </a>
        </div>

        <div className="hero-artwork">
          <div className="hero-sun" />

          <p>Always learning something new</p>
        </div>
      </div>

      <p className="hero-skills">
        HTML / CSS / SVELTEKIT / REACT IN PROGRESS
      </p>
    </section>
  )
}