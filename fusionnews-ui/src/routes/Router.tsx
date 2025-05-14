import React from "react";
import Footer from "../component/footer/Footer";
import HeaderOne from "../component/header/HeaderOne";
import HeaderTwo from "../component/header/HeaderTwo";
import Home from "../pages/Home";
import NewsAgency from "../pages/NewsAgency";
import SingleNews from "../pages/SingleNews";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";
import "../App.css";

const Router = () => {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo inpuSearch="" onSetInputSearch={() => { }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsAgency" element={<NewsAgency inpuSearch="" />} />
        <Route path="/singleNews" element={<SingleNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
