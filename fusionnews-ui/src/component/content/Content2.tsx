import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { fetchNewsRequest } from "../../redux/news/news.slide";
import userImg from '../../assets/images/user.jpg'; // author avatar placeholder

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
const Content2 = () => {
  const dispatch = useDispatch();

  const { newsList, status, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(
      fetchNewsRequest({
        filterRequest: "",
        pageNumber: 1,
        pageSize: 10,
      })
    );
  }, [dispatch]);

  if (status === "loading") {
    return <div className="text-center py-5">Loading news...</div>;
  }

  if (status === "failed") {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const articles = newsList?.newsApiResponse?.articles || [];

  if (articles.length === 0) {
    return <div className="text-center py-5">No news found</div>;
  }

  const randomArticles1 = shuffleArray(articles).slice(0, 2);
  const randomArticles2 = shuffleArray(articles).slice(2, 6);

  return (
    <>
      {/* Big news (2 items) */}
      {randomArticles1.map((item, idx) => (
        <div className="col-lg-6" key={`big-${idx}`}>
          <div className="position-relative mb-3">
            <img
              className="img-fluid w-100"
              src={item.urlToImage || '/src/assets/images/hot_new.jpg'}
               style={{
                width: "200px", 
                height: "150px", 
                objectFit: "cover",
                display: "block", 
              }}
              alt={item.title}
            />
            <div className="bg-white border border-top-0 p-4">
              <div className="mb-2">
                <NavLink
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                  to={`/singleNews/${item.source?.id}`}
                >
                  {item.source?.name || "News"}
                </NavLink>
                <NavLink className="text-body" to="/">
                  <small>{new Date(item.publishedAt).toLocaleDateString()}</small>
                </NavLink>
              </div>
              <NavLink
                className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold"
                to={`/singleNews/${item.source?.id}`}
              >
                {item.title.length > 60 ? item.title.substring(0, 60) + "..." : item.title}
              </NavLink>
            </div>
            <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle mr-2"
                  src={userImg}
                  width="25"
                  height="25"
                  alt={item.author || "Author"}
                />
                <small>{item.author || "Unknown Author"}</small>
              </div>
              <div className="d-flex align-items-center">
                <small className="ml-3">
                  <i className="far fa-eye mr-2"></i>
                  {/* You can add views count here if available */}
                </small>
                <small className="ml-3">
                  <i className="far fa-comment mr-2"></i>
                  {/* You can add comments count here if available */}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Small news (4 items) */}
      {randomArticles2.map((item, idx) => (
        <div className="col-lg-6" key={`small-${idx}`}>
          <div
            className="d-flex align-items-center bg-white mb-3"
            style={{ height: "110px" }}
          >
            <img
              className="img-fluid"
              src={item.urlToImage || '/src/assets/images/hot_new.jpg'}
              alt={item.title}
              style={{ maxWidth: "110px", objectFit: "cover", height: "110px" }}
            />
            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
              <div className="mb-2">
                <NavLink
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  to={`/singleNews/${item.source?.id}`}
                >
                  {item.source?.name || "News"}
                </NavLink>
                <NavLink className="text-body" to="/">
                  <small>{new Date(item.publishedAt).toLocaleDateString()}</small>
                </NavLink>
              </div>
              <NavLink
                className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                to={`/singleNews/${item.source?.id}`}
              >
                {item.title.length > 60 ? item.title.substring(0, 60) + "..." : item.title}
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content2;
