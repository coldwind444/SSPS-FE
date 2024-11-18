import React from 'react'
import Navbar from './component/NavigationBar/Navbar'
import Homepage from './pages/homePage/Homepage'
import Login from'./pages/Login/Login'
import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout'
import AuthLayout from './component/Layout/AuthLayout/AuthLayout'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
        <Routes>
          <Route path='/student' element={<DefaultLayout></DefaultLayout>}/>
          <Route path='/auth' element={<AuthLayout></AuthLayout>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/homepage' element={<Homepage/>} />
       </Routes>  
    </div>
  )
}

export default App