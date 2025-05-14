import React from 'react';
import { NavLink } from 'react-router-dom';
import Language from "../../helpers/language/Languagelayout";
import './headerOne.css';

const HeaderOne = () => {

    const currentDate = new Date();

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    

  return (
    <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-color px-lg-3">
            <div className="col-lg-9 bg-color">
                <nav className="navbar navbar-expand-sm bg-color p-0">
                    <ul className="navbar-nav ml-n2">
                        <li className="nav-item border-right border-secondary">
                            <NavLink className="nav-link text-body small text-color" to="/">{formatDate(currentDate)}</NavLink>
                        </li>
                        <li className="nav-item border-right border-secondary">
                            <NavLink className="nav-link text-body small text-color" to="/">Advertise</NavLink>
                        </li>
                        <li className="nav-item border-right border-secondary">
                            <NavLink className="nav-link text-body small text-color" to="/">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body small text-color" to="/">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3 text-right d-none d-md-block">
                <nav className="navbar navbar-expand-sm bg-color p-0">
                    <ul className="navbar-nav ml-auto mr-n2">
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-twitter"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-facebook-f"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-linkedin-in"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-instagram"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-google-plus-g"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-body text-color" to="/"><small className="fab fa-youtube"></small></NavLink>
                        </li>
                        <li className="nav-item">
                            <Language/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
            <div className="col-lg-4">
                <NavLink to="index.html" className="navbar-brand p-0 d-none d-lg-block">
                    <h1 className="m-0 display-4 text-uppercase text-primary logo-text-color">FUSIONS<span className="text-secondary font-weight-normal">News</span></h1>
                </NavLink>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                 {/* LOGO WEB */}
            </div>
        </div>
    </div>
  )
}

export default HeaderOne