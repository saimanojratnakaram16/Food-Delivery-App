import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";
import store from "../utils/store";

const DishItemCard = ({ dishDetails}) => {
  const { imageId, name, id, price, defaultPrice, description } = dishDetails;
  const dispatch = useDispatch();
  const selector = useSelector((store) =>
    store.cart.items.find((item) => item?.id == id)
  );
  const descriptionDetails = description?.split('.')[0];
  const handleAddItem = () => {
    dispatch(addItem({ imageId, name, id, price, defaultPrice }));
  };
  const handleRemoveItem = () => {
    dispatch(deleteItem({ id }));
  };
  return (
    <div
      key={id}
      className="m-2 p-4 border-t-2 border-slate-200"
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 pr-2">
          <p className="font-semibold ">{name}</p>
          <p className="text-sm">₹ {price / 100 || defaultPrice / 100}</p>  
          <p className="font-light text-xs mt-3">{descriptionDetails}</p>
          </div>
          <div className="mb-2 relative">
           <img className="h-20 rounded-md" src={CDN_URL + imageId} alt={name} />
           <div className="absolute text-xs -bottom-2 border-2 border-slate-200 text-center w-2/4 bg-white rounded-md p-1  left-[28%]">
          {!selector || selector?.count === 0 ? (
            <button
              className="p-1 text-green-600 font-semibold"
              onClick={handleAddItem}
            >
              + ADD
            </button>
          ) : (
            <div className="flex items-center justify-evenly">
              <button
                className="px-1 font-semibold"
                onClick={handleRemoveItem}
              >
                -
              </button>
              <div className="p-1">
              {selector?.count}
              </div>
              <button
                className="px-1 text-green-600 font-semibold"
                onClick={handleAddItem}
              >
                +
              </button>
            </div>
          )}
          </div>
       </div>
      </div>
    </div>
  );
};

export default DishItemCard;
