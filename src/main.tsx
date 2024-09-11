import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MatrizApp from './MatrizApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MatrizApp />
  </StrictMode>,
)
