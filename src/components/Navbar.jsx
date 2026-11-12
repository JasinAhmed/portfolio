import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const menuButtonRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  function toggleTheme() {
    setTheme((current) => (
      current === 'light' ? 'dark' : 'light'
    ))
  }

  return (
    <header className="site-header">
      <nav className="navbar" onKeyDown={handleKeyDown}>
        <a
          className="navbar-logo"
          href="#home"
          onClick={closeMenu}
        >
          JA<span>.</span>
        </a>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
          >
            <span
              className={`theme-icon ${theme === 'dark' ? 'is-dark' : ''}`}
            >
              {theme === 'light' ? '☾' : '☀'}
            </span>

            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          <button
            ref={menuButtonRef}
            className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>

            <span className="menu-icon">
              <span />
              <span />
            </span>
          </button>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="navbar-menu-inner">
            <ul className="navbar-links">
              <li>
                <a href="#projects" onClick={closeMenu}>
                  <span className="link-number">01</span>
                  Work
                  <span className="link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#about" onClick={closeMenu}>
                  <span className="link-number">02</span>
                  About
                  <span className="link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#contact" onClick={closeMenu}>
                  <span className="link-number">03</span>
                  Contact
                  <span className="link-arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}