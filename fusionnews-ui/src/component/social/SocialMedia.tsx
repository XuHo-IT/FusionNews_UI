import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'

const SocialMedia = () => {
  return (
    
                    
                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#39569E"}}>
                                <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Fans</span>
                            </NavLink>
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#52AAF4"}}>
                                <i className="fab fa-twitter text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </NavLink>
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none mb-3" style={{background:" #0185AE"}}>
                                <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Connects</span>
                            </NavLink>
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#C8359D"}}>
                                <i className="fab fa-instagram text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </NavLink>
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#DC472E"}}>
                                <i className="fab fa-youtube text-center py-4 mr-3"style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Subscribers</span>
                            </NavLink>
                            <NavLink to="/" className="d-block w-100 text-white text-decoration-none" style={{background: "#055570"}}>
                                <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </NavLink>
                        </div>
                    </div>
                   

                    
                
  )
}

export default SocialMedia