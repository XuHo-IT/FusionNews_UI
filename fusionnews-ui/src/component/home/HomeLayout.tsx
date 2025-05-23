import React from "react";
import "../home/home.css";
import FeaturedNews from "./FeaturedNews";
import SocialMedia from "../social/SocialMedia";
import Advertisement from "../social/advertisement";
// import Trending from '../social/Trending'
import NewsLetter from "../social/NewsLetter";
import Tags from "../social/Tags";
import Content1 from "../content/Content1";
import Content2 from "../content/Content2";
import Content3 from "../content/Content3";
import MainNews from "./MainNews";
import ChatBot from 'component/chatbot/ChatBotLayout'
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";

const HomeLayout = () => {
    const language = useSelector((state: RootState) => state.language.language);
  
  return (
    <div>
      <MainNews />

      <FeaturedNews />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <Content1 title={translations[language as "en" | "vi"].featuredNews} />
                <Content2 />
                <Content3 />
              </div>
            </div>
            <div className="col-lg-4">
              <SocialMedia />
              <Advertisement />
              {/* <Trending /> */}
              <NewsLetter />
              {/* <Tags /> */}
              <ChatBot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
