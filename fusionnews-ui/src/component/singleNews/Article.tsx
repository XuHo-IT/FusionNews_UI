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
const Article = () => {
  const dispatch = useAppDispatch();
  const { newsList, status, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);

  console.log("newsList: ", newsList);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className="position-relative mb-3">
      {/* newsList.map((news: INews)  for getting all */}
      {newsList.length > 0 && (
        <div
          key={newsList[0].articleId}
          className="bg-white border border-top-0 p-4 mb-4"
        >
          <div className="mb-3">
            {newsList[0].category.map((cat, index) => (
              <NavLink
                key={index}
                className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                to={`/category/${cat.toLowerCase()}`}
              >
                {cat}
              </NavLink>
            ))}
            <NavLink className="text-body" to="/">
              {new Date(newsList[0].pubDate).toLocaleDateString()}
            </NavLink>
          </div>

          <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
            {newsList[0].title}
          </h1>

          <p>{newsList[0].description}</p>

          {newsList[0].imageUrl && (
            <img
              className="img-fluid w-50 float-left mr-4 mb-2"
              src={newsList[0].imageUrl || imgNews}
              alt={newsList[0].title}
            />
          )}

          <p>
            Source:{" "}
            <a
              href={newsList[0].sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {newsList[0].sourceName}
            </a>
          </p>

          <h5 className="text-uppercase font-weight-bold mb-3">
            By: {newsList[0].creatorDisplay || newsList[0].creator?.join(", ")}
          </h5>

          <div className="d-flex justify-content-between bg-white border border-top-0 p-4 mt-3">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle mr-2"
                src={newsList[0].sourceIcon || imgNews}
                width="25"
                height="25"
                alt="author/source"
              />
              <span>{newsList[0].sourceId}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="ml-3">
                <i className="far fa-eye mr-2"></i>Views N/A
              </span>
              <span className="ml-3">
                <i className="far fa-comment mr-2"></i>Comments N/A
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
