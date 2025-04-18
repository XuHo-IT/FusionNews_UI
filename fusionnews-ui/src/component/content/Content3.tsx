import React from 'react'
import { NavLink } from 'react-router-dom'
import adImg from '../../assets/images/ads.png'
import userImg from '../../assets/images/user.jpg'
import newsImg1 from '../../assets/images/news-700x435-5.jpg'
import newsImg2 from '../../assets/images/news-110x110-1.jpg'
import newsImg3 from '../../assets/images/news-110x110-2.jpg'
import newsImg4 from '../../assets/images/news-110x110-3.jpg'
import newsImg5 from '../../assets/images/news-110x110-4.jpg'

const Content3 = () => {
    return (
        <>
            <div className="col-lg-12 mb-3">
                <NavLink to="/"><img className="img-fluid w-100" src={adImg} alt=""/></NavLink>
            </div>
            <div className="col-lg-12">
                <div className="row news-lg mx-0 mb-3">
                    <div className="col-md-6 h-100 px-0">
                        <img className="img-fluid h-100" src={newsImg1} style={{ objectFit: "cover" }} alt=''/>
                    </div>
                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                        <div className="mt-auto p-4">
                            <div className="mb-2">
                                <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    to="/">Business</NavLink>
                                <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                            </div>
                            <NavLink className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                            <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle mr-2" src={userImg} width="25" height="25" alt=""/>
                                    <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img className="img-fluid" src={newsImg2} alt=""/>
                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2">
                                <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                            </div>
                            <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img className="img-fluid" src={newsImg3} alt=""/>
                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2">
                                <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                            </div>
                            <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img className="img-fluid" src={newsImg4} alt=""/>
                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2">
                                <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                            </div>
                            <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img className="img-fluid" src={newsImg5} alt=""/>
                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div className="mb-2">
                                <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                            </div>
                            <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Content3