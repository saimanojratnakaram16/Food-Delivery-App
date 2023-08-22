import React, { useState } from "react";

const Pagination = ({  currentPage, onPageClick, totalItems, itemsPerPage, maxPagesToDisplay })=> {
  const pages = [];
  const [maxDisplayPageNumber,setMaxDisplayPageNumber] = useState(maxPagesToDisplay);
  for( let i=1;i<Math.ceil(totalItems/itemsPerPage);i++){
    pages.push(i);
  }
  console.log('rendered Pagination');
  const handlePageChange = (e) => {
    if (parseInt(e.target.innerText) !== currentPage) {
      onPageClick(parseInt(e.target.innerText));
    }
  };
  const handleOnNextPageClick = (e) =>{
    setMaxDisplayPageNumber(maxDisplayPageNumber+1);
  }
const handleOnPrevPageClick = (e) =>{
  setMaxDisplayPageNumber(maxDisplayPageNumber-1);
}

  const allPagesList = pages.map((number, index) => {
    return (
      <li
        key={index}
        onClick={(e) => handlePageChange(e)}
        className={`p-2 m-2 border-2 border-slate-400 text-sm cursor-pointer ${
          currentPage == number ? "bg-slate-600 text-white" : ""
        }`}
      >
        {number}
      </li>
    );
  })
  return (
    <ul className="flex flex-wrap justify-center p-3 m-3">
      {maxDisplayPageNumber-maxPagesToDisplay>0 && <li className="p-2 m-2 border-2 border-slate-400 text-sm cursor-pointer " onClick={handleOnPrevPageClick}>{'<'}</li>
      }
      {allPagesList.filter((eachPage,idx)=>{
          return idx <maxDisplayPageNumber && idx >= maxDisplayPageNumber-maxPagesToDisplay;   
      })
    }
      {maxDisplayPageNumber<pages.length && <li className="p-2 m-2 border-2 border-slate-400 text-sm cursor-pointer " onClick={handleOnNextPageClick}>{'>'}</li>

}
    </ul>
  );
}

export default React.memo(Pagination);