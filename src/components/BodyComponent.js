import React, { useState, useEffect } from "react";
import RestaurentItems from "./RestaurentItems";
import Shimmer from "./Shimmer";
import useRestaurentsList from "../hooks/useRestaurentsList";
import useOnlineCheck from "../hooks/useOnlineCheck";
import Pagination from "./Pagination";

const filterData = (searchText, restaurents) => {
  const res = restaurents.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return res;
};

const BodyComponent = () => {
  
 
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRestaurents, totalRestaurents] = useRestaurentsList(currentPage);
 
  const pages = [];
  for(i=1;i<Math.ceil(totalRestaurents/15);i++){
    pages.push(i);
  }
  useEffect(()=>{
    setFilteredRestaurents(pageRestaurents);
  },[pageRestaurents])

  // const isOnline = useOnlineCheck();
  const handleKeyDown = (event)=>{
    if(event.key == "Enter"){
      handleSearch();
    }
  }
  
  const handleSearch = () => {
    const filteredData = filterData(searchText, allRestaurents);
    setFilteredRestaurents(filteredData);
  };
  const handlePageChange = (newPage) =>{
    pageRestaurents.length = 0;
    setCurrentPage(newPage);
  }
  // if(!isOnline){
  //   return <h2>You are Offline, Please check your internet connection</h2>
  // }
  return (!pageRestaurents || pageRestaurents?.length === 0) ? (
    <div className="m-4">
      <Shimmer tilesCount={15} />
    </div>
  ) : (
    <div>
      <div className="w-[95%] mx-auto my-2 p-2">
        <div className="h-14 flex flex-wrap justify-center">
          <input
            type="text"
            className="p-2 w-96 h-10 border-2 border-slate-400 mr-2 rounded-md"
            placeholder="Search for restaurents"
            value={searchText}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-2 border-slate-400 h-10 w-28 rounded-md "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="my-2 py-2">
        {filteredRestaurents?.length === 0 ? (
          <div className="center"> No Such Restaurent Exists</div>
        ) : (
          <RestaurentItems restaurentsList={filteredRestaurents} />
        )}
        </div>
        <div className="">
        <Pagination pageNumbers={pages} currentPage={currentPage} onPageClick  = {handlePageChange}/>
        </div>
        
      </div>
    </div>
  );
}

export default BodyComponent;
