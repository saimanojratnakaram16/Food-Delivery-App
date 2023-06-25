import React from 'react'

export default function Pagination({pageNumbers, currentPage, onPageClick}) {
    const handlePageChange = (e) =>{
        if(parseInt(e.target.innerText) + 1 !== currentPage){
            onPageClick(e.target.innerText);
        } 
    }
    return (
    <ul className='flex flex-wrap justify-center p-3 m-3'>
      {pageNumbers.map((number, index)=>{
        return (<li key = {index} onClick={(e) => handlePageChange(e)} className={`p-2 m-2 border-2 border-slate-400 text-sm cursor-pointer ${currentPage==number ? "bg-green-500 text-white": ""}` }>
            {number}
            </li>);
      })}
    </ul>
  )
}
