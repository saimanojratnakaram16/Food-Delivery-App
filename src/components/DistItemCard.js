import React from "react";
import { CDN_URL } from "../utils/constants";


const DishItemCard = ({dishDetails}) =>{
    const {imageId, name, id, price} = dishDetails;
    return (
        <div key={id} className="w-64 m-2 p-2 cursor-pointer">
            <div className="h-40 mb-2">
                <img className="h-full rounded-md" src = {CDN_URL + imageId} alt={name}/>
            </div>
            <div>
                <h4>{name}</h4>
                <p className="font-light">₹ {(price/100)}</p>
            </div>
        </div>
    )
}

export default DishItemCard;