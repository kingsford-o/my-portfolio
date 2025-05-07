import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './pages/Home/Home'
import Projects from './pages/projects/Projects'
import About from './pages/about/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={< Projects/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App