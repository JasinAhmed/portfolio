// Ik importeer StrictMode voor extra controles tijdens het ontwikkelen.
import { StrictMode } from 'react'

// Ik importeer createRoot om React aan mijn HTML te koppelen.
import { createRoot } from 'react-dom/client'

// Ik laad de algemene styling van mijn portfolio.
import './index.css'

// Ik importeer App, waarin mijn componenten samenkomen.
import App from './App.jsx'

// Ik zoek de div met id="root" uit index.html.
// Daarin laat ik React mijn App-component weergeven.
createRoot(document.getElementById('root')).render(
  // Ik gebruik StrictMode om mogelijke problemen eerder te ontdekken.
  <StrictMode>
    <App />
  </StrictMode>,
)