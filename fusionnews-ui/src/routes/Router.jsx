import React from 'react'
import Footer from '../component/footer/Footer';
import HeaderOne from '../component/header/HeaderOne';
import HeaderTwo from '../component/header/HeaderTwo';
import Home from '../page/Home';
import Category from '../page/Category';
import SingleNews from '../page/SingleNews';
import Contact from '../page/Contact'
import { Route, Routes } from 'react-router-dom';

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