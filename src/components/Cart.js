import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
import DishItemCard from "./DistItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCost = cartItems.reduce((total, {price,count,defaultPrice}) => {
    return total + count * (price || defaultPrice)}, 0);

  const selectedItems = cartItems.map(({ restaurentId, ...rest }) => (
    <DishItemCard
      key={rest.id}
      dishDetails={rest}
      restaurentId={restaurentId}
    />
  ));

  return (
    <div className="min-h-[45vh]">
    <div className="p-2 my-10 m-auto border-2 border-slate-200 rounded-md w-2/5">
      <div className="flex justify-between p-2 m-2 items-center">
        <p className="">
          {cartItems.length > 0
            ? cartItems.length + " items selected"
            : "Your cart is Empty"}{" "}
        </p>
        <Link to="/">
          <button className="bg-green-600 text-white rounded-md p-2 text-sm">
            {cartItems.length > 0
              ? "Continue Shopping"
              : "Let's pick something"}
          </button>
        </Link>
      </div>
      {!!cartItems.length && (
        <>
        <div className="p-2 m-2 flex flex-wrap flex-col" data-testid="items-in-cart">{selectedItems}</div>
        <div className="border-t-2 border-slate-400 m-2 p-2">
          Bill Details 
          <div className="mt-3 w-2/3 mx-auto">
          <div className="flex justify-between font-light">
            <p> Item total </p>
            <p> {"₹ "+totalCost/100}</p>
          </div>
          <div className="flex justify-between font-light">
            <p> Processing Fee( 2% ) </p>
            <p> {"₹ "+(totalCost/100 * 0.02)}</p>
          </div>
          <div className="flex justify-between mt-2 pt-2 border-slate-200 border-t-2 ">
            <p> YOU PAY </p>
            <p> {"₹ "+(totalCost/100 * 1.02)}</p>
          </div>
          </div>
        </div>
        </>
      )}
    </div>
    </div>
  );
};
export default Cart;
