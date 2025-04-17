import React from 'react';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import imgNews1 from '../../assets/images/news-800x500-1.jpg'
import imgNews2 from '../../assets/images/news-800x500-2.jpg'
import imgNews3 from '../../assets/images/news-800x500-3.jpg'

import imgNews4 from '../../assets/images/news-700x435-1.jpg'
import imgNews5 from '../../assets/images/news-700x435-2.jpg'
import imgNews6 from '../../assets/images/news-700x435-3.jpg'
import imgNews7 from '../../assets/images/news-700x435-4.jpg'

import '../home/home.css'

const MainNews = () => {
    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <>
            <div className="container-fluid mb-0">
                <div className="row mb-0 ps-0">
                    <div className="col-lg-7 px-0 mb-0">
                        <Slider {...mainSliderSettings}>
                            {[imgNews1, imgNews2, imgNews3].map((img, index) => (
                                <div key={index} className="position-relative overflow-hidden" style={{ height: "500px" }}>
                                    <img className="img-fluid  h-100" src={img} alt="" style={{ objectFit: "cover" }} />
                                    <div className="overlay">
                                        <div className="mb-2">
                                            <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" to="/">Business</NavLink>
                                            <NavLink className="text-white" to="/">Jan 01, 2045</NavLink>
                                        </div>
                                        <NavLink className="h2 m-0 text-white text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>


                    <div className="col-lg-5 px-0 mb-0">
                        <div className="row mx-0" style={{ height: "500px" }}>
                            {[imgNews4, imgNews5, imgNews6, imgNews7].map((img, index) => (
                                <div
                                    key={index}
                                    className="col-6 px-0"
                                    style={{
                                        height: "250px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="position-relative  h-100">
                                        <img
                                            src={img}
                                            className="img-fluid  h-100"
                                            style={{ objectFit: "cover" }}
                                            alt=""
                                        />
                                        <div className="overlay">
                                            <div className="mb-2">
                                                <NavLink
                                                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                    to="/"
                                                >
                                                    Business
                                                </NavLink>
                                                <NavLink className="text-white" to="/">
                                                    <small>Jan 01, 2045</small>
                                                </NavLink>
                                            </div>
                                            <NavLink
                                                className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                                                to="/"
                                            >
                                                Lorem ipsum dolor sit amet elit...
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
            {/* <!-- Main News Slider End --> */}


            {/* <!-- Breaking News Start --> */}
            <div className="container-fluid bg-dark py-3 mb-3 ">
                <div className="container">
                    <div className="row align-items-center bg-dark">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{ width: "170px" }}>Breaking News</div>
                                <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                                    style={{ width: "calc(100% - 170px)", paddingRight: "90px" }}>
                                    <div className="text-truncate"><NavLink className="text-white text-uppercase font-weight-semi-bold" to="/">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</NavLink></div>
                                    <div className="text-truncate"><NavLink className="text-white text-uppercase font-weight-semi-bold" to="/">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainNews;
