import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";
import { fetchNewsRequest } from "../../redux/news/news.slide";

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const FeaturedNews = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();

  const { newsList, status, error } = useSelector(
    (state: RootState) => state.news
  );

  // Fetch featured news on mount
  useEffect(() => {
    dispatch(
      fetchNewsRequest({
        filterRequest: "", // or your featured filter
        pageNumber: 1,
        pageSize: 5,
      })
    );
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  if (status === "loading") {
    return <div className="text-center py-5">Loading featured news...</div>;
  }

  if (status === "failed") {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const articles = newsList?.newsApiResponse?.articles || [];
  const randomArticles = shuffleArray(articles).slice(0, 5);
  if (!articles.length) {
    return <div className="text-center py-5">No featured news found</div>;
  }

  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">
            {translations[language as "en" | "vi"].featuredNews}
          </h4>
        </div>
        <Slider {...settings}>
          {randomArticles.map((item, idx) => (
            <div key={idx} className="px-2">
              <div
                className="position-relative overflow-hidden"
                style={{ height: "300px" }}
              >
                <img
                  className="img-fluid h-100 w-100"
                  src={
                      item.urlToImage
                        ? item.urlToImage
                        : "/src/assets/images/hot_new.jpg"
                    }
                  style={{ objectFit: "cover" }}
                  alt={item.title}
                />
                <div className="overlay p-3">
                  <div className="mb-2">
                    <NavLink
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      to={`/singleNews/${item.source?.id}`}
                    >
                      {item.source?.name || "News"}
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
                    {item.title?.length > 60
                      ? item.title.substring(0, 60) + "..."
                      : item.title}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedNews;
