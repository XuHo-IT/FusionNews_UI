import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import imgNews from "../../assets/images/news_local.jpg";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { fetchNewsRequest } from "redux/news/news.slide";
import { INews } from "data/type";

const Article = () => {
  const dispatch = useAppDispatch();
  const { newsList, status, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    // Dispatch to fetch news data (without any filters for now)
    dispatch(fetchNewsRequest({}));
  }, [dispatch]);

  // Handle loading and error states
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  // Get the first article from the news list
  const news = newsList.length > 0 ? newsList[0] : null;

  if (!news) {
    return <p>No news available.</p>;
  }

  return (
    <div className="position-relative mb-3">
      <div
        key={news.articleId}
        className="bg-white border border-top-0 p-4 mb-4"
      >
        <div className="mb-3">
          {news.category?.map((cat, index) => (
            <NavLink
              key={index}
              className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
              to={`/category/${cat.toLowerCase()}`}
            >
              {cat}
            </NavLink>
          ))}
          <NavLink className="text-body" to="/">
            {new Date(news.pubDate).toLocaleDateString()}
          </NavLink>
        </div>

        <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
          {news.title}
        </h1>

        <p>{news.description}</p>

        {news.imageUrl || imgNews ? (
          <img
            className="img-fluid w-50 float-left mr-4 mb-2"
            src={news.imageUrl || imgNews}
            alt={news.title}
          />
        ) : null}

        <h5 className="text-uppercase font-weight-bold mb-3">
          Uploaded By:{" "}
          {news.creatorDisplay && news.creatorDisplay !== "unknown"
            ? news.creatorDisplay
            : news.creator?.join(", ") || "anonymous user"}
        </h5>

        <div className="d-flex justify-content-between bg-white border border-top-0 p-4 mt-3">
          <div className="d-flex align-items-center">
            <h5 className="mr-2">Coming From:</h5>
            <img
              className="rounded-circle mr-2"
              src={news.sourceIcon || imgNews}
              width="25"
              height="25"
              alt="source icon"
            />
            <a
              href={news.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {news.sourceName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
