import React from 'react'
import { NavLink } from 'react-router-dom'

const Tags = () => {
  return (
    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <div className="d-flex flex-wrap m-n1">
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Politics</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Business</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Corporate</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Business</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Health</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Education</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Science</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Business</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Foods</NavLink>
                                <NavLink to="/" className="btn btn-sm btn-outline-secondary m-1">Travel</NavLink>
                            </div>
                        </div>
                    </div>
  )
}

export default Tags