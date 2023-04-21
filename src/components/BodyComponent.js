import React, { useState, useEffect } from "react";
import RestaurentItems from "./RestaurentItems";
import Skimmer from "./Shimmer";

const filterData = (searchText, restaurents) => {
  const res = restaurents.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return res;
};

export default function BodyComponent() {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurentsList();
  }, []);

  async function getRestaurentsList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setAllRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const handleSearch = () => {
    const filteredData = filterData(searchText, allRestaurents);
    console.log(filteredData);
    setFilteredRestaurents(filteredData);
  };
  return allRestaurents?.length === 0 ? (
    <Skimmer />
  ) : (
    <div>
      <div className="body-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurents"
            value={searchText}
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
