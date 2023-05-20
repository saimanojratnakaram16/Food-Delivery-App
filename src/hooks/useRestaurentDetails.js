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
        setRestaurentMenuItems(
          jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards
        );
        setRestaurentInfo(jsonData?.data?.cards[0]?.card?.card?.info);
      };

      return [restaurentInfo, restaurentMenuItems];

}
export default useRestaurentDetails;