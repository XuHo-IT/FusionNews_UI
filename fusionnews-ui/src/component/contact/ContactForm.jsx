import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactForm = () => {
  return (
   
                <div className="col-lg-8">
                    <div className="section-title mb-0">
                        <h4 className="m-0 text-uppercase font-weight-bold">Contact Us For Any Queries</h4>
                    </div>
                    <div className="bg-white border border-top-0 p-4 mb-3">
                        <div className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact Info</h6>
                            <p className="mb-4">The contact form is currently inactive. Get NavLink functional and working contact form with Ajax & PHP in NavLink few minutes. Just copy and paste the files, add NavLink little code and you're done. <NavLink to="https://htmlcodex.com/contact-form">Download Now</NavLink>.</p>
							<div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                                    <h6 className="font-weight-bold mb-0">Our Office</h6>
                                </div>
                                <p className="m-0">123 Street, New York, USA</p>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-envelope-open text-primary mr-2"></i>
                                    <h6 className="font-weight-bold mb-0">Email Us</h6>
                                </div>
                                <p className="m-0">info@example.com</p>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-phone-alt text-primary mr-2"></i>
                                    <h6 className="font-weight-bold mb-0">Call Us</h6>
                                </div>
                                <p className="m-0">+012 345 6789</p>
                            </div>
                        </div>
                        <h6 className="text-uppercase font-weight-bold mb-3">Contact Us</h6>
                        <form>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Your Name" required="required"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control p-4" placeholder="Your Email" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Subject" required="required"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" placeholder="Message" required="required"></textarea>
                            </div>
                            <div>
                                <button className="btn btn-primary font-weight-semi-bold px-4" style={{height: "50px"}}
                                    type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            
  )
}

export default ContactForm