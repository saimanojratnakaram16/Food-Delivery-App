import React from "react";
import { CDN_URL } from "../utils/constants";
import "./DishItemCard.css";

const DishItemCard = ({dishDetails}) =>{
    const {imageId, name, id, price} = dishDetails;
    return (
        <div key={id} className="dish-card-container">
            <div className="dish-img">
                <img src = {CDN_URL + imageId} alt={name}/>
            </div>
            <div className="dish-details">
                <h4>{name}</h4>
                <p>₹ {(price/100)}</p>
            </div>
        </div>
    )
}

export default DishItemCard;