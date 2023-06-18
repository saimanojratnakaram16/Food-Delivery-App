import { useSelector } from "react-redux";
import store from "../utils/store";
import DishItemCard from "./DistItemCard";

const Cart =  () =>{

    const cartItems = useSelector(store=>store.cart.items);

    const selectedItems = cartItems.map(({restaurentId,...rest}) => <DishItemCard key={rest.id} dishDetails={rest} restaurentId={restaurentId}/>)

    return (
        <div className="p-2 m-2">
        <div>{cartItems.length} items selected </div>
{ !!cartItems.length &&
        <div className="p-2 m-2 flex flex-wrap">
            {selectedItems}
        </div>}
        </div>
    )
}
export default Cart;