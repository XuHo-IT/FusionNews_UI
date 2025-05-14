import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest } from "../../redux/news/news.slide";
import { RootState } from "../../redux/store";
import { translations } from "helpers/languageMap";
import { v4 as uuidv4 } from "uuid";
import "./demoContent1.css";

interface DemoContent1Props {
  title: string;
  inpuSearch: string;
}

const DemoContent1: React.FC<DemoContent1Props> = ({ title, inpuSearch }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();
  const { newsList, status, error } = useSelector(
    (state: RootState) => state.news
  );

  // Initialize states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  // Effect to fetch news when parameters change
  useEffect(() => {
    dispatch(
      fetchNewsRequest({
        filterRequest: inpuSearch,
        pageNumber: currentPage,
        pageSize,
      })
    );
  }, [dispatch, currentPage, pageSize, inpuSearch]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= newsList.totalPages) {
      setCurrentPage(page);
    }
  };

  const totalPages = newsList.totalPages;
  const totalResults = newsList.totalResults;

  if (status === "loading")
    return <div className="text-center">Loading news...</div>;
  if (status === "failed")
    return <div className="text-center text-danger">Error: {error}</div>;
  if (!newsList?.newsApiResponse?.articles?.length)
    return <div className="text-center">No articles found</div>;

  return (
    <>
      <div className="col-12">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">{title}</h4>
        </div>
      </div>

      {newsList.newsApiResponse.articles.map((news, index) => {
        console.log("rendering news:", news);
        return (
          <div className="col-12 mt-3" key={news.source.name}>
            <div className="section-news-agency d-flex">
              <div className="col-md-4">
                <img
                  className="img-fluid w-100"
                  src={news.urlToImage}
                  style={{ objectFit: "cover" }}
                  alt={news.title}
                />
              </div>
              <div className="col-md-8 text-start content-card">
                <h5>
                  <NavLink to={`/singleNews/${news.source.id}`}>
                    {news.title}
                  </NavLink>
                </h5>
                <p>{new Date(news.publishedAt).toLocaleDateString()}</p>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="col-12 d-flex justify-content-center my-3">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {currentPage > 5 && (
              <>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link">...</button>
                </li>
              </>
            )}
            {[...Array(totalPages)].map((_, i) => {
              if (currentPage > 5 && i + 1 === 1) return;
              // if (currentPage !== totalPages && i + 1 === totalPages) return;
              if (i + 1 <= currentPage + 5 && i + 1 >= currentPage - 5) {
                return (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              }
            })}
            {currentPage < totalPages - 5 && (
              <>
                <li className="page-item">
                  <button className="page-link">...</button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DemoContent1;
