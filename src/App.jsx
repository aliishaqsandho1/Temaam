import { useState } from 'react'
import './App.css'
import Header from './components/global/header'
import Sidebar from './components/global/sidebar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <div className='flex flex-row'>
        <Sidebar />
        <Header />
      </div>
    </>
  )
}

export default App
