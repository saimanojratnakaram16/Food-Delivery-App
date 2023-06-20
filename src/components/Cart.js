import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
import DishItemCard from "./DistItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const selectedItems = cartItems.map(({ restaurentId, ...rest }) => (
    <DishItemCard
      key={rest.id}
      dishDetails={rest}
      restaurentId={restaurentId}
    />
  ));

  return (
    <div className="p-2 mt-10 m-auto border-2 border-slate-200 rounded-md w-2/5">
      <div className="flex justify-between p-2 m-2 items-center">
        <p className="">
          {cartItems.length > 0
            ? cartItems.length + " items selected"
            : "Your cart is Empty"}{" "}
        </p>
        <Link to="/">
          <button className="bg-green-400 rounded-md p-2 text-sm">
            {cartItems.length > 0
              ? "Continue Shopping"
              : "Let's pick something"}
          </button>
        </Link>
      </div>
      {!!cartItems.length && (
        <div className="p-2 m-2 flex flex-wrap flex-col">{selectedItems}</div>
      )}
    </div>
  );
};
export default Cart;
