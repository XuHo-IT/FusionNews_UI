import React, { useState } from "react";
import "./headerOne.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";

interface HeaderTwoProps {
  inpuSearch: string;
  onSetInputSearch: (value: string) => void;
}

const HeaderTwo: React.FC<HeaderTwoProps> = ({
  inpuSearch,
  onSetInputSearch,
}) => {
  const language = useSelector((state: RootState) => state.language.language);

  const [inputEl, setInputEl] = useState("");

  function handleSearch() {
    if (inputEl.trim() !== "") {
      onSetInputSearch(inputEl);
      setInputEl("");
    }
  }

  return (
    <section>
      <div className="container-fluid p-0 ">
        <nav className="navbar bg-color  navbar-expand-lg navbar-dark py-2 py-lg-0 px-lg-5">
          <NavLink to="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              Biz<span className="text-white font-weight-normal">News</span>
            </h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse bg-color navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0 bg-color">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-color nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                {translations[language as "en" | "vi"].home}
              </NavLink>
              <NavLink
                to="/newsAgency"
                className={({ isActive }) =>
                  `text-color nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                {translations[language as "en" | "vi"].newsAgency}
              </NavLink>
              {/* <NavLink
                to="/forum"
                className={({ isActive }) =>
                  `text-color nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                {translations[language as "en" | "vi"].forum}
              </NavLink> */}
              {/* <div className="nav-item dropdown">
                                <NavLink to="/singleNews" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="#" className="dropdown-item">Menu item 1</NavLink>
                                    <NavLink to="#" className="dropdown-item">Menu item 2</NavLink>
                                    <NavLink to="#" className="dropdown-item">Menu item 3</NavLink>
                                </div>
                            </div> */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` text-color nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                {translations[language as "en" | "vi"].contact}
              </NavLink>
            </div>
            <form onSubmit={handleSearch}>
              <div
                className="input-group ml-auto d-none d-lg-flex"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder={translations[language as "en" | "vi"].keyword}
                  value={inputEl}
                  onChange={(e) => setInputEl(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary search-color border-0 px-3"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeaderTwo;
