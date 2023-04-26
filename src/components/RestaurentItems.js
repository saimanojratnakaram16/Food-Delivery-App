import React from "react";
import RestaurentCard from "./RestaurentCard";

export default function RestaurentItems({ restaurentsList }) {
  const items = restaurentsList?.map((restaurent) => (
    <RestaurentCard
      key={restaurent.data.id}
      restaurentDetails={restaurent.data}
    />
  ));
  return (
    <div className="restaurent-items-container">
      {items}
    </div>
  );
}
