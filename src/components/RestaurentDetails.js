import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import DishItemCard from "./DistItemCard";
import useRestaurentDetails from "../hooks/useRestaurentDetails";

const RestaurentDetails = () => {
  const { restaurentId } = useParams();
  const [restaurentInfo, restaurentMenuItems] = useRestaurentDetails(restaurentId);
  console.log(restaurentInfo);
  const restaurentNames = restaurentMenuItems?.map((data, index) => {
    return <DishItemCard key = {index} dishDetails={data?.card?.info}/>
});
  return restaurentMenuItems ? (
    <div>
      <div className="p-3 m-auto w-3/5 border-b-2 border-slate-200">
      <div className="text-xl font-bold m-2">{restaurentInfo.name} </div>
        <div className="text-sm px-2 font-light">{restaurentInfo?.cuisines?.join(',')}</div>
        <div className="text-sm px-2 font-light">{restaurentInfo?.areaName}</div>
        {/* //div for ratings display */}
        <div>
        <p>{restaurentInfo.avgRatingString}</p>
        <p>{restaurentInfo.totalRatingsString}</p>
        </div>
        </div>
      <div className="flex flex-wrap justify-center">{restaurentNames}</div>
    </div>
  ) : (
    <Shimmer tilesCount={10} />
  );
};

export default RestaurentDetails;
