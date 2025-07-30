import { useState } from 'react'
import './App.css'
import Header from './components/global/header'
import Sidebar from './components/global/sidebar'
import Footer from './components/global/footer'
import MainContent from './components/pages/main-content'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <div className='flex flex-row'>

        <div className='flex-1'>
          <Sidebar />
        </div>
        <div className='flex flex-col justify-between w-full'>
          <Header />
          <MainContent/>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
