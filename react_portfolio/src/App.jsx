import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Landing from './Pages/Landing'
import Header from './Components/Header'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />


      </Routes>


    </>
  )
}

export default App
