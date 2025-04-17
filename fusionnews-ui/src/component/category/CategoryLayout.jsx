import React from 'react'
import SocialMedia from '../social/SocialMedia'
import Advertisement from '../social/advertisement'
import Trending from '../social/Trending'
import NewsLetter from '../social/NewsLetter'
import Tags from '../social/Tags'
import Content1 from '../content/Content1'
import Content2 from '../content/Content2'
import Content3 from '../content/Content3'
import './category.css'

const CategoryLayout = () => {
    return (
        <>
            <div class="container-fluid mt-5 pt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <Content1 title="Category: Business"/>
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
        </>
    )
}

export default CategoryLayout