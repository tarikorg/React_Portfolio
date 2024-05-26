import { Routes, Route } from 'react-router-dom'

import React from 'react'
import AboutMe from './Pages/About-Me'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'


import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <main className='flex-grow-1'>
        <Header />

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
