import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
        <div className="row py-4">
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
                <div className="d-flex justify-content-start">
                    <NavLink className="btn btn-lg btn-secondary btn-lg-square mr-2" to="/"><i className="fab fa-twitter"></i></NavLink>
                    <NavLink className="btn btn-lg btn-secondary btn-lg-square mr-2" to="/"><i className="fab fa-facebook-f"></i></NavLink>
                    <NavLink className="btn btn-lg btn-secondary btn-lg-square mr-2" to="/"><i className="fab fa-linkedin-in"></i></NavLink>
                    <NavLink className="btn btn-lg btn-secondary btn-lg-square mr-2" to="/"><i className="fab fa-instagram"></i></NavLink>
                    <NavLink className="btn btn-lg btn-secondary btn-lg-square" to="/"><i className="fab fa-youtube"></i></NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
                <div className="mb-3">
                    <div className="mb-2">
                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                    </div>
                    <NavLink className="small text-body text-uppercase font-weight-medium" to="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</NavLink>
                </div>
                <div className="mb-3">
                    <div className="mb-2">
                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                    </div>
                    <NavLink className="small text-body text-uppercase font-weight-medium" to="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</NavLink>
                </div>
                <div className="">
                    <div className="mb-2">
                        <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="/">Business</NavLink>
                        <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                    </div>
                    <NavLink className="small text-body text-uppercase font-weight-medium" to="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
                <div className="m-n1">
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Politics</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Corporate</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Health</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Education</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Science</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Foods</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Entertainment</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Travel</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Lifestyle</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Politics</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Corporate</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Health</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Education</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Science</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Business</NavLink>
                    <NavLink to="/" className="btn btn-sm btn-secondary m-1">Foods</NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                <div className="row">
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-1.jpg" alt=""/></NavLink>
                    </div>
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-2.jpg" alt=""/></NavLink>
                    </div>
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-3.jpg" alt=""/></NavLink>
                    </div>
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-4.jpg" alt=""/></NavLink>
                    </div>
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-5.jpg" alt=""/></NavLink>
                    </div>
                    <div className="col-4 mb-3">
                        <NavLink to="/"><img className="w-100" src="img/news-110x110-1.jpg" alt=""/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-4 px-sm-3 px-md-5" style={{background:" #111111"}}>
        <p className="m-0 text-center">&copy; <NavLink to="/">Your Site Name</NavLink>. All Rights Reserved. 
		

		Design by <NavLink to="https://htmlcodex.com">HTML Codex</NavLink></p>
    </div>
   
    </div>
  )
}

export default Footer