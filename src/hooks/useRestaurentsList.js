import { useState, useEffect } from "react";

import { RESTAURENTS_LIST } from "../utils/constants";

const useRestaurentsList = () =>{
    const [allRestaurents, setAllRestaurents] = useState([]);
    useEffect(() => {
        getRestaurentsList();
      }, []);
    
      async function getRestaurentsList() {
        const data = await fetch(
          RESTAURENTS_LIST
        );
        const jsonData = await data.json();
        setAllRestaurents(jsonData?.data?.cards[1]?.data?.data?.cards);
        
      }
      return allRestaurents;
}

export default useRestaurentsList;