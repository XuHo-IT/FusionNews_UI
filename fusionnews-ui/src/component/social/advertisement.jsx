import React from 'react'
import { NavLink } from 'react-router-dom'
import ad from '../../assets/images/news-800x500-2.jpg'

const Advertisement = () => {
  return (
    <div className="mb-3">
            <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
            </div>
            <div className="bg-white text-center border border-top-0 p-3">
                <NavLink to="/"><img className="img-fluid" src={ad} alt=""/></NavLink>
            </div>
        </div>
  )
}

export default Advertisement