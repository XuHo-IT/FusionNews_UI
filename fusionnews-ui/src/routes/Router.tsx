import React from 'react'
import Footer from '../component/footer/Footer';
import HeaderOne from '../component/header/HeaderOne';
import HeaderTwo from '../component/header/HeaderTwo';
import Home from '../pages/Home';
import Category from '../pages/Category';
import SingleNews from '../pages/SingleNews';
import Contact from '../pages/Contact'
import { Route, Routes } from 'react-router-dom';
import '../App.css'

const Router = () => {
  return (
    <div>
        <HeaderOne/>
     <HeaderTwo/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/singleNews' element={<SingleNews/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default Router