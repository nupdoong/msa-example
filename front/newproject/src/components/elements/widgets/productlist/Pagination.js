import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="pro-pagination-style text-center mt-30">
            <ul className="mb-0 mt-0">
            {pageNumber.map((pageNum) => (
                <li
                    key={pageNum}
                    className="page-item"
                    onClick={() => paginate(pageNum)}
                >
                <button className="page-link">{pageNum}</button>
                
                </li>
            ))}
            </ul>
        </div>
    );

}

export default Pagination;