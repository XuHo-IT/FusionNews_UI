import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { fetchNewsRequest } from "../../redux/news/news.slide";
import { translations } from "helpers/languageMap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/home.css";

const MainNews = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();

  const { newsList, status, error } = useSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(
      fetchNewsRequest({ filterRequest: "", pageNumber: 1, pageSize: 7 })
    );
  }, [dispatch]);

  if (status === "loading") {
    return <div className="text-center py-5">Loading news...</div>;
  }

  if (status === "failed") {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const articles = newsList?.newsApiResponse?.articles || [];

  if (!articles.length) {
    return <div className="text-center py-5">No news found</div>;
  }

  // Slider settings
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sideSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Main and side sliders container */}
      <div className="container-fluid mb-0">
        <div className="row mb-0 ps-0">
          {/* Main slider */}
          <div className="col-lg-7 px-0 mb-0">
            <Slider {...mainSliderSettings}>
              {articles.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="position-relative overflow-hidden"
                  style={{ height: "500px" }}
                >
                  <img
                    className="img-fluid"
                    src={
                      item.urlToImage
                        ? item.urlToImage
                        : "/src/assets/images/hot_new.jpg"
                    }
                    alt={item.title || "Image"}
                    loading="lazy"
                   
                  />

                  <div className="overlay">
                    <div className="mb-2">
                      <NavLink
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        to={`/singleNews/${item.source?.id}`}
                      >
                        {item.source?.name || "Business"}
                      </NavLink>
                      <NavLink className="text-white" to="/">
                        {new Date(item.publishedAt).toLocaleDateString()}
                      </NavLink>
                    </div>
                    <NavLink
                      className="h2 m-0 text-white text-uppercase font-weight-bold"
                      to={`/singleNews/${item.source?.id}`}
                    >
                      {item.title.length > 60
                        ? item.title.substring(0, 60) + "..."
                        : item.title}
                    </NavLink>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Side news blocks */}
          <div className="col-lg-5 px-0 mb-0">
            <div className="row mx-0" style={{ height: "500px" }}>
              {articles.slice(3, 7).map((item, index) => (
                <div
                  key={index}
                  className="col-6 px-0"
                  style={{ height: "250px", overflow: "hidden" }}
                >
                  <div className="position-relative h-100">
                    <img
                      src={
                        item.urlToImage
                          ? item.urlToImage
                          : "/src/assets/images/hot_new.jpg"
                      }
                      className="img-fluid h-100"
                      style={{ objectFit: "cover" }}
                      alt={item.title}
                    />
                    <div className="overlay">
                      <div className="mb-2">
                        <NavLink
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          to={`/singleNews/${item.source?.id}`}
                        >
                          {item.source?.name || "Business"}
                        </NavLink>
                        <NavLink className="text-white" to="/">
                          <small>
                            {new Date(item.publishedAt).toLocaleDateString()}
                          </small>
                        </NavLink>
                      </div>
                      <NavLink
                        className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                        to={`/singleNews/${item.source?.id}`}
                      >
                        {item.title.length > 60
                          ? item.title.substring(0, 60) + "..."
                          : item.title}
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News ticker */}
      <div className="container-fluid bg-dark py-3 mb-3">
        <div className="container">
          <div className="row align-items-center bg-dark">
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <div
                  className="bg-primary text-dark text-center font-weight-medium py-2"
                  style={{ width: "170px" }}
                >
                  {translations[language as "en" | "vi"].breaking_news}
                </div>
                <div
                  className="tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                  style={{ width: "calc(100% - 170px)", paddingRight: "90px" }}
                >
                  {/* Just list top 3 breaking news titles horizontally */}
                  {articles.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="text-truncate mx-3">
                      <NavLink
                        className="text-white text-uppercase font-weight-semi-bold"
                        to={`/singleNews/${item.source?.id}`}
                      >
                        {item.title}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNews;
