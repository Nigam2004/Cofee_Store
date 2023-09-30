import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './Products'
import Photo from './Photo'
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' Component={Products}></Route>
          <Route path='/photo' Component={Photo}></Route>
        </Routes>
      </Router>
    </>


  )
}

export default App
