import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-role">Front-end developer</p>

      <h1 className="hero-name">Jasin Ahmed</h1>

      <p className="hero-description">
        I build websites with HTML, CSS, JavaScript and SvelteKit.
        I’m currently learning React and looking for a front-end
        internship where I can work with a team and learn new things.
      </p>

      <p className="hero-description">
        I use the RAPPE principles to guide my work. This means working
        on responsive layouts, accessibility, performance and progressive
        enhancement. I want my websites to work well on different devices
        and add extra features where browsers support them.
      </p>
    </section>
  )
}