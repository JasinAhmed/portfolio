import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact'

  return (
    <>
      <Navbar />

      <main>
        {isContactPage ? (
          <Contact />
        ) : (
          <>
            <Hero />
            <Projects />
            <About />
          </>
        )}
      </main>
    </>
  )
}