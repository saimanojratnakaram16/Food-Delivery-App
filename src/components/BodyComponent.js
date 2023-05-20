import React, { useState, useEffect } from "react";
import RestaurentItems from "./RestaurentItems";
import Skimmer from "./Shimmer";
import useRestaurentsList from "../hooks/useRestaurentsList";
import useOnlineCheck from "../hooks/useOnlineCheck";

const filterData = (searchText, restaurents) => {
  const res = restaurents.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return res;
};

export default function BodyComponent() {
  
  const allRestaurents = useRestaurentsList();
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    setFilteredRestaurents(allRestaurents);
  },[allRestaurents])

  const isOnline = useOnlineCheck();
  const handleKeyDown = (event)=>{
    if(event.key == "Enter"){
      handleSearch();
    }
  }
  
  const handleSearch = () => {
    const filteredData = filterData(searchText, allRestaurents);
    console.log(filteredData);
    setFilteredRestaurents(filteredData);
  };
  console.log(isOnline);
  if(!isOnline){
    return <h2>You are Offline, Please check your internet connection</h2>
  }
  return allRestaurents?.length === 0 ? (
    <Skimmer tilesCount={10}/>
  ) : (
    <div>
      <div className="body-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurents"
            value={searchText}
            onKeyDown = {handleKeyDown}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        {filteredRestaurents?.length === 0 ? (
          <div className="center"> No Such Restaurent Exists</div>
        ) : (
          <RestaurentItems restaurentsList={filteredRestaurents} />
        )}
      </div>
    </div>
  );
}
