import React from 'react'
import Navbar from './component/NavigationBar/Navbar'
import Homepage from './pages/homePage/Homepage'
import Login from'./pages/Login/Login'
import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout'
import AuthLayout from './component/Layout/AuthLayout/AuthLayout'
import PrintingPage from './pages/student/PrintingPage/PrintingPage'
import HistoryPage from './pages/Student_PrintHistory/PrintHistory'
import Purchase from './pages/PagePurchase/Purchase'
import PrinterManagement from './pages/PrinterManagement/PrinterManagement'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
        <Routes>
          {/* <Route path='/student/print' element={<DefaultLayout><PrintingPage/></DefaultLayout>}/>
          <Route path='/auth' element={<AuthLayout></AuthLayout>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/homepage' element={<Homepage/>} />
          <Route path='/student/history' element={<DefaultLayout><HistoryPage /></DefaultLayout>} />
          <Route path='/student/buy' element={<DefaultLayout><Purchase /></DefaultLayout>} />    */}
          <Route path='/sspo/PrinterManagement' element={<DefaultLayout><PrinterManagement /></DefaultLayout>} />                   
       </Routes>  
    </div>
  )
}

export default App