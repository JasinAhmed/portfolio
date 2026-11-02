// Ik importeer de componenten die ik in App gebruik.
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

// Met export default maak ik App beschikbaar voor andere bestanden.
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}