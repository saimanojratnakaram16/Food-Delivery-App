import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import DishItemCard from "./DistItemCard";
import useRestaurentDetails from "../hooks/useRestaurentDetails";

const RestaurentDetails = () => {
  const { restaurentId } = useParams();
  const [restaurentInfo, restaurentMenuItems] =
    useRestaurentDetails(restaurentId);
  const restaurentNames = restaurentMenuItems?.map((data, index) => {
    return <DishItemCard key={index} dishDetails={data?.card?.info} />;
  });
  return restaurentMenuItems ? (
    <div className="flex justify-center flex-col w-2/5 m-auto py-3 my-5">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
              clipRule="evenodd"
            />
          </svg>
          {" " + restaurentInfo?.costForTwoMessage}
        </div>
        <div className="flex border-2 border-slate-400 p-2 m-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
          {" " + restaurentInfo?.sla.slaString}
        </div>
      </div>
      <div className="flex flex-col">{restaurentNames}</div>
    </div>
  ) : (
    <Shimmer tilesCount={10} />
  );
};

export default RestaurentDetails;
