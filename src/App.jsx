import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section id="about" aria-label="About" />
        <section id="projects" aria-label="Projects" />
        <section id="contact" aria-label="Contact" />
      </main>
    </>
  )
}