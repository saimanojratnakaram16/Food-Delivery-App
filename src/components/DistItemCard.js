import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";

const DishItemCard = ({ dishDetails}) => {
  const { imageId, name, id, price, defaultPrice, description } = dishDetails;
  const dispatch = useDispatch();
  const selector = useSelector((store) =>
    store.cart.items.find((item) => item?.id == id)
  );
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
          <p className="font-semibold " data-testid="item-name">{name}</p>
          <p className="text-sm">₹ {price / 100 || defaultPrice / 100}</p>  
          <p className="font-light text-xs mt-3">{description}</p>
          </div>
          <div className="mb-2 relative">
           <img className="h-24 w-28 rounded-md" src={CDN_URL + imageId} alt={name} />
           <div className="absolute text-xs -bottom-2 border-2 w-2/3 border-slate-200 text-center bg-white rounded-md p-1  left-[22%]">
          {!selector || selector?.count === 0 ? (
            <button
              className="p-1 text-green-600 "
              data-testid = 'add-to-cart'
              onClick={handleAddItem}
            >
              + ADD
            </button>
          ) : (
            <div className="flex items-center justify-evenly">
              <button
                className="px-1 font-semibold"
                onClick={handleRemoveItem}
                data-testid= 'remove-one-from-cart'
              >
                -
              </button>
              <div className="p-1">
              {selector?.count}
              </div>
              <button
                className="px-1 text-green-600 font-semibold"
                onClick={handleAddItem}
                data-testid="add-one-to-cart"
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

// export const withVegLabels = (props) => {
//   return (props) => {
//    return (<>
//       <label>Veg</label>
//       <DishItemCard {...props} />
//     </>);
//   };
// };

export default DishItemCard;
