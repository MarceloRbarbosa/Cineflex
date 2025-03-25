import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './GlobalStyled'
import App from './Components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <App />
  </StrictMode>,
)
