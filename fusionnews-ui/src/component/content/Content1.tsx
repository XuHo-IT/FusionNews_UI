import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";
import { fetchNewsRequest } from "../../redux/news/news.slide";

interface Content1Props {
  title: string;
}
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
const Content1: React.FC<Content1Props> = ({ title }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();

  const { newsList, status, error } = useSelector(
    (state: RootState) => state.news
  );

  // Fetch news on component mount
  useEffect(() => {
    dispatch(
      fetchNewsRequest({
        filterRequest: "", // Or your custom filter if needed
        pageNumber: 1,
        pageSize: 10, // Load 2 items for this component
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
  const randomArticles = shuffleArray(articles).slice(0, 2);
  if (articles.length === 0) {
    return <div className="text-center py-5">No news found</div>;
  }

  return (
    <>
      <div className="col-12">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">{title}</h4>
          <NavLink
            className="text-secondary font-weight-medium text-decoration-none"
            to="/"
          >
            {translations[language as "en" | "vi"].view_all}
          </NavLink>
        </div>
      </div>

      {randomArticles.slice(0, 2).map((item, idx) => (
        <div className="col-lg-6" key={idx}>
          <div className="position-relative mb-3">
            <img
              className="img-fluid w-100"
              src={
                item.urlToImage
                  ? item.urlToImage
                  : "/src/assets/images/hot_new.jpg"
              }
              alt={item.title}
              style={{
                width: "200px", 
                height: "150px", 
                objectFit: "cover",
                display: "block", 
              }}
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
                  <small>
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </small>
                </NavLink>
              </div>
              <NavLink
                className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                to={`/singleNews/${item.source?.id}`}
              >
                {item.title.length > 60
                  ? item.title.substring(0, 60) + "..."
                  : item.title}
              </NavLink>
              <p className="m-0">
                {item.description || "No description available."}
              </p>
            </div>
            <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle mr-2"
                  src={"https://via.placeholder.com/25"} // Replace with author image if available
                  width="25"
                  height="25"
                  alt={item.author || "Author"}
                />
                <small>{item.author || "Unknown Author"}</small>
              </div>
              <div className="d-flex align-items-center">
                <small className="ml-3">
                  <i className="far fa-eye mr-2"></i>
                  {/* {item.views || "N/A"} */}
                </small>
                <small className="ml-3">
                  <i className="far fa-comment mr-2"></i>
                  {/* {item.comments || "N/A"} */}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content1;
