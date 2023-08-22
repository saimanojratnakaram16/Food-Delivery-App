import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategories from "./RestaurantCategories";
import useRestaurentDetails from "../hooks/useRestaurentDetails";
import { RUPEE_ICON, CLOCK_ICON } from "../assets/icons/icons";

const RestaurentDetails = () => {
  const { restaurentId } = useParams();
  const [restaurentInfo, restaurentMenuItems] =
    useRestaurentDetails(restaurentId);
  const restaurantItemsCategories = restaurentMenuItems?.map((data, index) => {
    return (
      <RestaurantCategories
        key={data?.card?.card?.title}
        categoryData={data?.card?.card}
      />
    );
  });
  return restaurentMenuItems ? (
    <div className="flex justify-center flex-col w-3/5 m-auto py-3 my-5">
      <div className="p-3 flex items-center justify-between border-b-2 border-slate-200 border-dashed">
        <div>
          <p className="text-xl font-bold m-2">{restaurentInfo.name} </p>
          <p className="text-sm px-2 font-light">
            {restaurentInfo?.cuisines?.join(",")}
          </p>
          <p className="text-sm px-2 font-light">{restaurentInfo?.areaName}</p>
        </div>
        {/* //div for ratings display */}
        <div className="border-2 border-slate-300 rounded-md p-2 m-2">
          <div
            className={`text-sm font-bold border-b-2 flex items-center justify-evenly p-1 border-slate-400 ${
              parseFloat(restaurentInfo.avgRatingString) >= 4
                ? "text-green-600"
                : parseFloat(restaurentInfo.avgRatingString) >= 3
                ? "text-orange-500"
                : "text-red-500"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <p>{restaurentInfo.avgRatingString}</p>
          </div>
          <p className="text-xs font-light py-1 text-[0.6rem]">
            {restaurentInfo.totalRatingsString}
          </p>
        </div>
      </div>
      <div className="m-2 p-2 flex flex-wrap text-sm font-semibold items-center">
        <div className="flex border-2 border-slate-400 p-2 m-2 rounded-md">
        {RUPEE_ICON}
          {" " + restaurentInfo?.costForTwoMessage}
        </div>
        <div className="flex border-2 border-slate-400 p-2 m-2 rounded-md">
          {CLOCK_ICON}
          {" " + restaurentInfo?.sla.slaString}
        </div>
      </div>
      <div className="flex flex-col" data-testid="restaurentItems-list">
        {restaurantItemsCategories}
      </div>
    </div>
  ) : (
    <Shimmer tilesCount={10} />
  );
};

export default RestaurentDetails;
