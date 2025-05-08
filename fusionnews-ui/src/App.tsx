// src/App.tsx
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import "./App.css";
import Footer from "./component/footer/Footer";
import HeaderOne from "./component/header/HeaderOne";
import HeaderTwo from "./component/header/HeaderTwo";
import Home from "./pages/Home";
import NewsAgency from "./pages/NewsAgency";
import SingleNews from "./pages/SingleNews";
import Contact from "./pages/Contact";
import React from "react";
import Theme from "./helpers/theme/ThemeLayout";
import Language from "./helpers/language/Languagelayout";
import Forum from "./pages/Forum";


const App: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`App ${theme}`}>
      <Theme/>
      <Language/>
      <HeaderOne />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsAgency" element={<NewsAgency />} />
        <Route path="/newsAgency/singleNews" element={<SingleNews />} />    {/* using "/newsAgency/singleNews" to show singleNews is child of newsAgency */}
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
