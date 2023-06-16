import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";
import store from "../utils/store";

const DishItemCard = ({ dishDetails }) => {
  const { imageId, name, id, price, defaultPrice } = dishDetails;
  const dispatch = useDispatch();
  const selector = useSelector((store) =>
    store.cart.items.find((item) => item?.id == id)
  );
  const handleAddItem = () => {
    dispatch(addItem({ imageId, name, id, price, defaultPrice }));
  };
  const handleRemoveItem = () => {
    dispatch(deleteItem({id}));
  };
  return (
    <div
      key={id}
      className="w-64 m-2 p-2 cursor-pointer hover:shadow-md shadow-slate-200"
    >
      <div className="h-40 mb-2">
        <img className="h-full rounded-md" src={CDN_URL + imageId} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p className="font-light">₹ {price / 100 || defaultPrice / 100}</p>
        {!selector || selector?.count === 0 ? (
          <button
            className="p-1 bg-white border-2 border-slate-400 rounded-md"
            onClick={handleAddItem}
          >
            + Add
          </button>
        ) : (
          <div className="flex items-center">
            <button
              className="p-2 bg-white border-2 border-slate-400 rounded-md"
              onClick={handleRemoveItem}
            >
              -
            </button>
            {selector?.count}
            <button
              className="p-2 bg-white border-2 border-slate-400 rounded-md"
              onClick={handleAddItem}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishItemCard;
