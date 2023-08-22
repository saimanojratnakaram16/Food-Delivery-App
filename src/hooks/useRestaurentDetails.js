import { useState, useEffect } from "react";
import { RESTAURENT_DETAILS_URL } from "../utils/constants";


const useRestaurentDetails = (restaurentId) =>{

    const [restaurentMenuItems, setRestaurentMenuItems] = useState(null);
    const [restaurentInfo, setRestaurentInfo] = useState(null);
    useEffect(() => {
        getRestaurentMenuItems();
      }, []);
    
      const getRestaurentMenuItems = async () => {
        const res = await fetch(
          `${RESTAURENT_DETAILS_URL}${restaurentId}&submitAction=ENTER`
        );
        const jsonData = await res.json();
        const dataByCategories = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(res => res?.card?.card?.["@type"].split('.').pop() ==="ItemCategory");
        setRestaurentMenuItems(dataByCategories);
        setRestaurentInfo(jsonData?.data?.cards[0]?.card?.card?.info);
      };
      return [restaurentInfo, restaurentMenuItems];

}
export default useRestaurentDetails;