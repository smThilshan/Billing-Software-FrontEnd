import React from 'react'
import Navbar from './components/Navbar'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import ManageCategory from './pages/ManageCategory'
import ManageItem from './pages/ManageItem'
import ManageUsers from './pages/ManageUsers'
import OrderHistory from './pages/OrderHistory'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/manage-category' element={<ManageCategory/>} />
        <Route path='/manage-items' element={<ManageItem/>} />
        <Route path='/manage-users' element={<ManageUsers/>} />
        <Route path='/order-history' element={<OrderHistory/>} />
      </Routes>

    </Router>
   
  )
}

export default App