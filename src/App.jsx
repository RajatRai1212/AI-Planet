import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import CardDetails from './Pages/CardDetails';
import Home from './Pages/Home';
import NewSubmission from './Pages/NewSubmission';

const App = () => {
  return (
    <div>
      

      <BrowserRouter>
        <Routes>
          
        <Route exact path='/' element={< Home />}/>
        <Route exact path="/Submission-Details" element={<CardDetails/>}/>
        <Route exact path ='/New-submission' element={<NewSubmission/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App