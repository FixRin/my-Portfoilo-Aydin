import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header.jsx'
import './App.css'
import Main from './Components/Mains.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='Main'>
      <Main />
      <Projects />
    </div>
    <Contact />
  </React.StrictMode>
)
