// src/components/Pagination.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context";

const Pagination = () => {
    const { itemsPerPage, totalItems, paginate, currentPage } = useContext(GlobalContext);
    const pageNumbers = [];

    // Calculate the total number of pages
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav className="pagination flex my-4">
            <ul className="pagination flex flex-row space-x-1">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button 
                            onClick={() => paginate(number)} 
                            className={`page-link border px-2 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} // Change styles based on active page
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;