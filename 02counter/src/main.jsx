import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App , {Build} from './App.jsx'
// import  from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Build />
  </StrictMode>
)
