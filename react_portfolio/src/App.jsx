import { Routes, Route } from 'react-router-dom'

import React from 'react'
import AboutMe from './Pages/About-Me'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AboutMe />} />


      </Routes>

      <Footer />
    </>
  )
}

export default App
