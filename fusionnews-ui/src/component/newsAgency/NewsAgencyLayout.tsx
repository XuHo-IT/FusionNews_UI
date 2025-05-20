import React from "react";
import SocialMedia from "../social/SocialMedia";
import Advertisement from "../social/advertisement";
// import Trending from '../social/Trending'
import NewsLetter from "../social/NewsLetter";
import Tags from "../social/Tags";
import Content1 from "../content/Content1";
import Content2 from "../content/Content2";
import Content3 from "../content/Content3";
import "./category.css";
import DemoContent1 from "./DemoContent1";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";

interface NewsAgencyLayout {
  inpuSearch: string;
}

const NewsAgencyLayout: React.FC<NewsAgencyLayout> = ({ inpuSearch }) => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <DemoContent1
                  title={translations[language as "en" | "vi"].hotNews}
                  inpuSearch={inpuSearch}
                />
                {/* <Content1 title="Top 10 News Agency"/>
                                <Content2/>
                                <Content3/> */}
              </div>
            </div>

            <div className="col-lg-4">
              <SocialMedia />
              <Advertisement />
              {/* <Trending /> */}
              <NewsLetter />
              {/* <Tags /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAgencyLayout;
