// src/App.tsx
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider
import { store } from './redux/store'; // Import the store
import React from 'react'
import './App.css';
import Footer from './component/footer/Footer';
import HeaderOne from './component/header/HeaderOne';
import HeaderTwo from './component/header/HeaderTwo';
import Home from './pages/Home';
import Category from './pages/Category';
import SingleNews from './pages/SingleNews';
import Contact from './pages/Contact';

const App: FC = () => {
  return (
    <Provider store={store}> {/* Wrap your App with Provider */}
      <div className="App">
        <HeaderOne />
        <HeaderTwo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/singleNews" element={<SingleNews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
