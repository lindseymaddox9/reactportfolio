import { useState } from 'react'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import {Outlet} from 'react-router-dom'
import "./App.css"

function App() {


  return (
    <>
    <Header />
    <Outlet className="content" />
    <Footer />
      
    </>
  )
}

export default App
