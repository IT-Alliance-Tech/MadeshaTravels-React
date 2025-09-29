import { Route } from 'lucide-react'
import React from 'react'
import { Routes } from 'react-router-dom'
import App from '../App'
import AboutUs from '../pages/contactUs'

const AppRoutes = () => {
  return (
   <Routes>
<Route path='/' element={<App />} />
<Route path='/aboutUs' element={<AboutUs />} />



   </Routes>
  )
}

export default AppRoutes 