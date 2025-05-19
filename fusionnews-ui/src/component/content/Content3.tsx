import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";  // Adjust path to your store file
import { fetchNewsRequest } from "../../redux/news/news.slide"; // Adjust path to your news slice
import userImg from '../../assets/images/user.jpg'; // placeholder author avatar

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Content3 = () => {
  const dispatch = useDispatch();

  // Select news data, loading status, and error from Redux state
  const { newsList, status, error } = useSelector((state: RootState) => state.news);

  // Fetch news when component mounts
  useEffect(() => {
    dispatch(fetchNewsRequest({ filterRequest: "", pageNumber: 1, pageSize: 10 }));
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

  // For layout: first article big, next 4 smaller
  const mainArticle = articles[0];
  const sideArticles = shuffleArray(articles).slice(0, 2);

  return (
    <>
      {/* Main Big Article */}
      <div className="col-lg-12" style={{ paddingTop: "20px" }} >
        <div className="row news-lg mx-0 mb-3">
          <div className="col-md-6 h-100 px-0">
            <img
              className="img-fluid h-100"
              src={mainArticle.urlToImage || userImg}
              style={{ objectFit: "cover" }}
              alt={mainArticle.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
            <div className="mt-auto p-4">
              <div className="mb-2">
                <NavLink
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                  to={`/singleNews/${mainArticle.source?.id || ""}`}
                >
                  {mainArticle.source?.name || "News"}
                </NavLink>
                <NavLink className="text-body" to="/">
                  <small>{new Date(mainArticle.publishedAt).toLocaleDateString()}</small>
                </NavLink>
              </div>
              <NavLink
                className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                to={`/singleNews/${mainArticle.source?.id || ""}`}
              >
                {mainArticle.title.length > 60 ? mainArticle.title.substring(0, 60) + "..." : mainArticle.title}
              </NavLink>
              <p className="m-0">{mainArticle.description || "No description available."}</p>
            </div>
            <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
              <div className="d-flex align-items-center">
                <img className="rounded-circle mr-2" src={userImg} width="25" height="25" alt={mainArticle.author || "Author"} />
                <small>{mainArticle.author || "Unknown Author"}</small>
              </div>
              <div className="d-flex align-items-center">
                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side smaller articles */}
      {sideArticles.map((item, idx) => (
        <div className="col-lg-6" style={{ paddingTop: "50px" }} key={`side-${idx}`}>
          <div className="d-flex align-items-center bg-white mb-3"style={{ height: "110px"}}>
            <img
              className="img-fluid"
              src={item.urlToImage || userImg}
              alt={item.title}
              style={{ maxWidth: "110px", objectFit: "cover", height: "110px" }}
            />
            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
              <div className="mb-2">
                <NavLink
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  to={`/singleNews/${item.source?.id || ""}`}
                >
                  {item.source?.name || "News"}
                </NavLink>
                <NavLink className="text-body" to="/">
                  <small>{new Date(item.publishedAt).toLocaleDateString()}</small>
                </NavLink>
              </div>
              <NavLink
                className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                to={`/singleNews/${item.source?.id || ""}`}
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

export default Content3;
