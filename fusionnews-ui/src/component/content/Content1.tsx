import React from 'react'
import { NavLink } from 'react-router-dom'
import newImg1 from '../../assets/images/news-700x435-1.jpg'
import newImg2 from '../../assets/images/news-700x435-2.jpg'
import userImg from '../../assets/images/user.jpg'

interface Content1Props{
    title: string;
}

const Content1: React.FC<Content1Props> = ({title}) => {
    return (
        <>
            <div className="col-12">
                <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">{title}</h4>
                    <NavLink className="text-secondary font-weight-medium text-decoration-none" to="/">View All</NavLink>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="position-relative mb-3">
                    <img className="img-fluid w-100" src={newImg1} style={{ objectFit: "cover" }} alt="" />
                    <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                            <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                to="/">Business</NavLink>
                            <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                        </div>
                        <NavLink className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                            rebum clita rebum dolor stet amet justo</p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle mr-2" src={userImg} width="25" height="25" alt="" />
                            <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="position-relative mb-3">
                    <img className="img-fluid w-100" src={newImg2} style={{ objectFit: "cover" }} alt="" />
                    <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                            <NavLink className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                to="/">Business</NavLink>
                            <NavLink className="text-body" to="/"><small>Jan 01, 2045</small></NavLink>
                        </div>
                        <NavLink className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" to="/">Lorem ipsum dolor sit amet elit...</NavLink>
                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                            rebum clita rebum dolor stet amet justo</p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle mr-2" src={userImg} width="25" height="25" alt="" />
                            <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content1