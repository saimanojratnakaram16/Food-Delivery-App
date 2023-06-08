import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import DishItemCard from "./DistItemCard";
import useRestaurentDetails from "../hooks/useRestaurentDetails";

const RestaurentDetails = () => {
  const { restaurentId } = useParams();
  const [restaurentInfo, restaurentMenuItems] = useRestaurentDetails(restaurentId);

  const restaurentNames = restaurentMenuItems?.map((data, index) => (
    <DishItemCard key = {index} dishDetails={data?.card?.info} />
  ));
  return restaurentMenuItems ? (
    <div>
      <div className="text-xl font-bold">
        <h1>{restaurentInfo.name}</h1>
      </div>
      <div className="flex flex-wrap">{restaurentNames}</div>
    </div>
  ) : (
    <Shimmer tilesCount={10} />
  );
};

export default RestaurentDetails;
