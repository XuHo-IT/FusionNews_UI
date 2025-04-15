import React from 'react';
import SocialMedia from '../social/SocialMedia'
import NewsLetter from '../social/NewsLetter'
import Tags from '../social/Tags'
import Advertisement from '../social/advertisement'
import Article from './Article'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './singleNews.css'
import Trending from '../social/Trending'
import HeadLine from './HeadLine'



const SingleLayout = () => {
    return (
        <>
        <HeadLine/>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Article/>
                        <CommentList/>
                        <CommentForm/>
                    </div>

                    <div className="col-lg-4">
                    <SocialMedia />
                    <Advertisement />
                    <Trending/>
                    <NewsLetter />
                    <Tags />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleLayout