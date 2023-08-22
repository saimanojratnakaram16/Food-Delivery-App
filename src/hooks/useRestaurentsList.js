import { useState, useEffect } from "react";

import { RESTAURENTS_LIST } from "../utils/constants";

const useRestaurentsList = (pageNumber) =>{
    const [allRestaurentsData, setAllRestaurentsData] = useState({});
    useEffect(() => {
        getRestaurentsList();
      },[pageNumber]);
      async function getRestaurentsList() {
       const offSetVal = pageNumber > 1 ?((pageNumber * 16) - 17):0;
        const data = await fetch(
          RESTAURENTS_LIST+ "&offset="+offSetVal+"&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
        );
        const jsonData = await data.json();
        let restaurentsData = jsonData?.data?.cards?.filter((card)=>card?.card?.card?.id === "restaurant_grid_listing");
        let restaurentsInfo = restaurentsData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        restaurentsInfo = restaurentsInfo.map((restaurant)=>restaurant?.info);
        setAllRestaurentsData({allRestaurents:restaurentsInfo,totalRestaurents:100});    
      }
      
      return [allRestaurentsData.allRestaurents, allRestaurentsData.totalRestaurents ];
}

export default useRestaurentsList;