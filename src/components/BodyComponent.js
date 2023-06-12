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
    setFilteredRestaurents(filteredData);
  };
  if(!isOnline){
    return <h2>You are Offline, Please check your internet connection</h2>
  }
  return allRestaurents?.length === 0 ? (
    <div className="m-4">
      <Skimmer tilesCount={10} />
    </div>
  ) : (
    <div>
      <div className="m-4 p-2">
        <div className="h-10 flex justify-center">
          <input
            type="text"
            className="p-2 w-96 h-full border-2 border-slate-400 mr-2 rounded-md"
            placeholder="Search for restaurents"
            value={searchText}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-2 border-slate-400 h-full w-28 rounded-md "
            onClick={handleSearch}
          >
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
