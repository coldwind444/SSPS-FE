import React from 'react'
import Navbar from './component/NavigationBar/Navbar'
import Homepage from './pages/homePage/Homepage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
       { <Routes>
        <Route path='/' element={<Homepage/>} />
       </Routes>  }
    </div>
  )
}

export default App