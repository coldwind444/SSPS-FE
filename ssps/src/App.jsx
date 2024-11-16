import React from 'react'
import Navbar from './component/NavigationBar/Navbar'
import Homepage from './pages/homePage/Homepage'
import Login from'./pages/Login/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>} />
       </Routes>  
    </div>
  )
}

export default App