import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import newImg1 from '../../assets/images/news-700x435-1.jpg'
import newImg2 from '../../assets/images/news-700x435-2.jpg'
import userImg from '../../assets/images/user.jpg'
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";
import './demoContent1.css'

interface NewsItem {
    title: string;
    date: string;
    description: string;
    image: string;
  }

interface DemoContent1Props {
    title: string;
}

const DemoContent1: React.FC<DemoContent1Props> = ({ title }) => {
    const language = useSelector((state: RootState) => state.language.language);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const newsList: NewsItem[] = Array.from({ length: 18 }, (_, i) => ({
        title: `Hello World ${i + 1}`,
        date: '01-05-2025 15:00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur obcaecati voluptate quae dolorum dolorem beatae nisi.',
        image: newImg2
    }));

    const totalPages = Math.ceil(newsList.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <div className="col-12">
                <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">{title}</h4>
                </div>
            </div>


            {currentItems.map((item, index) => (
        <div className="col-12 mt-3" key={index}>
          <div className="section-news-agency d-flex">
            <div className="col-md-4">
              <img className="img-fluid w-100" src={item.image} style={{ objectFit: "cover" }} alt="" />
            </div>
            <div className="col-md-8 text-start content-card">
              <h5><NavLink to="/newsAgency/singleNews">{item.title}</NavLink></h5>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}


            {/* Pagination */}
            <div className="col-12 d-flex justify-content-center my-3">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                        </li>
                        {[...Array(totalPages)].map((_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>



        </>
    )
}

export default DemoContent1;