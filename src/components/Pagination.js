import React from "react";

export default function Pagination({  currentPage, onPageClick, totalPages, itemsPerPage }) {
  const pages = [];
  for( let i=1;i<Math.ceil(totalPages/15);i++){
    pages.push(i);
  }
  const handlePageChange = (e) => {
    if (parseInt(e.target.innerText) + 1 !== currentPage) {
      onPageClick(e.target.innerText);
    }
  };
  return (
    <ul className="flex flex-wrap justify-center p-3 m-3">
      {pages.map((number, index) => {
        return (
          <li
            key={index}
            onClick={(e) => handlePageChange(e)}
            className={`p-2 m-2 border-2 border-slate-400 text-sm cursor-pointer ${
              currentPage == number ? "bg-green-500 text-white" : ""
            }`}
          >
            {number}
          </li>
        );
      })}
    </ul>
  );
}
