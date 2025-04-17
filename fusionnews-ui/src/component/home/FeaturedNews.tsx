import React from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import imgNews1 from '../../assets/images/news-700x435-1.jpg'
import imgNews2 from '../../assets/images/news-700x435-2.jpg'
import imgNews3 from '../../assets/images/news-700x435-3.jpg'
import imgNews4 from '../../assets/images/news-700x435-4.jpg'
import imgNews5 from '../../assets/images/news-700x435-5.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedNews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  const newsItems = [
    { id: 1, img: imgNews1 },
    { id: 2, img: imgNews2 },
    { id: 3, img: imgNews3 },
    { id: 4, img: imgNews4 },
    { id: 5, img: imgNews5 }
  ]

  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>
        <Slider {...settings}>
          {newsItems.map((item) => (
            <div key={item.id} className="px-2">
              <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                <img
                  className="img-fluid h-100"
                  src={item.img}
                  style={{ objectFit: 'cover' }}
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
        </Slider>
      </div>
    </div>
  )
}

export default FeaturedNews
