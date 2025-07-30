import { useState } from 'react'
import './App.css'
import Header from './components/global/header'
import Sidebar from './components/global/sidebar'
import Footer from './components/global/footer'
import MainContent from './components/pages/main-content'
function App() {

  return (
    <>
      <div className='flex flex-row'>

        <div className='flex-1 fixed h-screen overflow-y-auto bg-gray-100 w-[20%] z-1'>
          <Sidebar />
        </div>
        <div className='flex flex-col justify-between w-[80%] fixed h-screen overflow-y-auto ml-[20%]'>
          <Header />
          <MainContent/>
         <Footer/>
        </div>

      </div>
    </>
  )
}

export default App
