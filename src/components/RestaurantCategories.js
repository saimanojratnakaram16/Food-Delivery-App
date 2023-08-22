import { useState } from "react";
import DishItemCard from "./DistItemCard";
import { DOWN_ARROW, UP_ARROW } from "../assets/icons/icons";

const RestaurantCategories = ({ categoryData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const items = categoryData?.itemCards?.map((item) => (
    <DishItemCard key={item?.card?.info?.id} dishDetails={item?.card?.info} />
  ));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" m-2 rounded-md border-2 border-slate-200">
      <div className="p-2 m-1 flex justify-between" onClick={handleClick}>
        <span className="font-bold">
          {categoryData?.title} {` (${categoryData?.itemCards?.length}) `}
        </span>
        {isOpen ? (
          <span className="text-xl font-light">
            {UP_ARROW}
          </span>
        ) : (
          <span className="text-xl font-light">
            {DOWN_ARROW}
          </span>
        )}
      </div>
      {isOpen && <div>{items}</div>}
    </div>
  );
};

export default RestaurantCategories;
