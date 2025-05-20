// src/App.tsx
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/Footer";
import HeaderOne from "./component/header/HeaderOne";
import HeaderTwo from "./component/header/HeaderTwo";
import Theme from "./helpers/theme/ThemeLayout";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import NewsAgency from "./pages/NewsAgency";
import SingleNews from "./pages/SingleNews";
import Language from "./helpers/language/Languagelayout";
import { RootState } from "./redux/store";

const App: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [inputSearch, setInputSearch] = React.useState("");

  return (
    <div className={`App ${theme}`}>
      {/* <Theme />
      <Language /> */}
      <HeaderOne />
      <div className="helper">
        <Theme />
      </div>
      <HeaderTwo inpuSearch={inputSearch} onSetInputSearch={setInputSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/newsAgency"
          element={<NewsAgency inpuSearch={inputSearch} />}
        />
        <Route path="/newsAgency/singleNews" element={<SingleNews />} />{" "}
        {/* using "/newsAgency/singleNews" to show singleNews is child of newsAgency */}
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
