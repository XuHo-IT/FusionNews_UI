import React from "react";
import { NavLink } from "react-router-dom";
import imgNews from "../../assets/images/news_local.jpg";
import { useAppDispatch, useAppSelector } from "redux/hook";
import {
  fetchNewsRequest,
  fetchNewsSucess,
  fetchNewsFailure,
} from "redux/news/news.slide";
import { useEffect } from "react";
import { INews } from "data/type";
const Trending = () => {
  const dispatch = useAppDispatch();
  const { newsList, status, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
      </div>
      <div className="bg-white border border-top-0 p-3">
        {newsList.length > 0 &&
          newsList.slice(0, 5).map((news, index) => (
            <div
              key={index}
              className="d-flex align-items-center bg-white mb-3"
              style={{ height: "110px" }}
            >
              <img
                className="img-fluid"
                src={news.imageUrl || imgNews} 
                alt={news.title}
                style={{ width: "150px", height: "110px", objectFit: "cover" }}
              />

              <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                <div className="mb-2">
                  <NavLink
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                    to="/"
                  >
                    {news.category}
                  </NavLink>
                  <NavLink className="text-body" to="/">
                    <small>{new Date(news.pubDate).toLocaleDateString()}</small>
                  </NavLink>
                </div>
                <NavLink
                  className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                  to={news.sourceUrl}
                >
                  {news.title}
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
