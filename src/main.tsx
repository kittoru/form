import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { Context } from './app/context/Context'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
)
