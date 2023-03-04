import react, { useState } from 'react'

// css
import './App.css'
import AddTask from './components/AddTask'

//components
import Tasks from './components/Tasks'


//lib

import Header from './components/Header'

//router

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  // Comportará as tarefas adicionadas pelo user
 

  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;