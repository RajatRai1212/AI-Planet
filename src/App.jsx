import React from 'react'
import { Cards } from './Components/Cards'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return ( 
      <>
      <Navbar/>
      <Hero/>
      <Cards/>
      </>
  )
}

export default App