import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../../assets/images/news-110x110-1.jpg'
import img2 from '../../assets/images/news-110x110-2.jpg'
import img3 from '../../assets/images/news-110x110-3.jpg'
import img4 from '../../assets/images/news-110x110-4.jpg'
import img5 from '../../assets/images/news-110x110-5.jpg'

const Trending = () => {
  return (
    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                <img className="img-fluid" src={img1} alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                                    </div>
                                    <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                <img className="img-fluid" src={img2} alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                                    </div>
                                    <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                <img className="img-fluid" src={img3} alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                                    </div>
                                    <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                <img className="img-fluid" src={img4} alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                                    </div>
                                    <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                <img className="img-fluid" src={img5} alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                                    </div>
                                    <NavLink className="h6 m-0 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Trending