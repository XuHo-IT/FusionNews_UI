import React from 'react'
import '../home/home.css'
import FeaturedNews from './FeaturedNews'
import LastNews from './LastNews'
import MainNews from './MainNews'
import SocialMedia from '../social/SocialMedia'
import Advertisement from '../social/advertisement'
import Trending from '../social/Trending'
import NewsLetter from '../social/NewsLetter'
import Tags from '../social/Tags'
import Content1 from '../content/Content1'
import Content2 from '../content/Content2'
import Content3 from '../content/Content3'

const HomeLayout = () => {
  return (
    <div>
      <MainNews />
      <FeaturedNews />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
          <div class="col-lg-8">
                            <div class="row">
                                <Content1 title="Featured News"/>
                                <Content2/>
                                <Content3/>
                            </div>
                        </div>
            <div class="col-lg-4">
              <SocialMedia />
              <Advertisement />
              <Trending />
              <NewsLetter />
              <Tags />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeLayout