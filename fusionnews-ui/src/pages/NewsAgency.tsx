import NewsAgencyLayout from "../component/newsAgency/NewsAgencyLayout";
import React from "react";

interface NewsAgencyProps {
  inpuSearch: string;
}

const Category: React.FC<NewsAgencyProps> = ({ inpuSearch }) => {
  return (
    <div>
      <NewsAgencyLayout inpuSearch={inpuSearch} />
    </div>
  );
};

export default Category;
