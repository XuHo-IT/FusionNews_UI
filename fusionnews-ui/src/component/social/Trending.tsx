// import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import imgNews from "../../assets/images/news_local.jpg";
// import { useAppDispatch, useAppSelector } from "redux/hook";
// import { fetchNewsRequest } from "redux/news/news.slide";
// import { INews } from "data/type";

// const Trending = () => {
//   const dispatch = useAppDispatch();
//   const { newsList, status, error } = useAppSelector((state) => state.news);

//   useEffect(() => {
//     const filterCondition = ""; // Replace with logic to set filter
//     if (filterCondition) {
//       dispatch(fetchNewsRequest({ filterOn: filterCondition }));
//     } else {
//       dispatch(fetchNewsRequest({})); // or simply dispatch without a payload if no filter
//     }
//   }, [dispatch]);
  

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

//   return (
//     <div className="mb-3">
//       <div className="section-title mb-0">
//         <h4 className="m-0 text-uppercase font-weight-bold">Trending News</h4>
//       </div>
//       <div className="bg-white border border-top-0 p-3">
//         {newsList.length > 0 &&
//           newsList.slice(0, 5).map((news: INews, index: number) => (
//             <div
//               key={index}
//               className="d-flex align-items-center bg-white mb-3"
//               style={{ height: "110px" }}
//             >
//               <img
//                 className="img-fluid"
//                 src={news.imageUrl || imgNews}
//                 alt={news.title}
//                 style={{ width: "150px", height: "110px", objectFit: "cover" }}
//               />

//               <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
//                 <div className="mb-2">
//                   {news.category?.slice(0, 1).map((cat, i) => (
//                     <NavLink
//                       key={i}
//                       className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
//                       to={`/category/${cat.toLowerCase()}`}
//                     >
//                       {cat}
//                     </NavLink>
//                   ))}
//                   <NavLink className="text-body" to="/">
//                     <small>{new Date(news.pubDate).toLocaleDateString()}</small>
//                   </NavLink>
//                 </div>
//                 <NavLink
//                   className="h6 m-0 text-secondary text-uppercase font-weight-bold"
//                   to={news.sourceUrl || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {news.title}
//                 </NavLink>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Trending;
