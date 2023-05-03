import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import DishItemCard from "./DistItemCard";

const RestaurentDetails = () => {
  const { restaurentId } = useParams();
  const [restaurentMenuItems, setRestaurentMenuItems] = useState(null);
  const [restaurentInfo, setRestaurentInfo] = useState(null);
  useEffect(() => {
    getRestaurentMenuItems();
  }, []);

  const getRestaurentMenuItems = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${restaurentId}&submitAction=ENTER`
    );
    const jsonData = await res.json();
    setRestaurentMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    setRestaurentInfo(jsonData?.data?.cards[0]?.card?.card?.info);
  };
  const restaurentNames = restaurentMenuItems?.map((data, index) => (
    <DishItemCard dishDetails={data?.card?.info} />
  ));
  return restaurentMenuItems ? (
    <div>
      <div className="restaurent-info">
        <h2>{restaurentInfo.name}</h2>
      </div>
      <div className="dishes-container">{restaurentNames}</div>
    </div>
  ) : (
    <Shimmer tilesCount={10} />
  );
};

export default RestaurentDetails;
