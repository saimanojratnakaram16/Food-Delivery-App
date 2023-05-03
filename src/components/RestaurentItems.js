import React from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";

export default function RestaurentItems({ restaurentsList }) {
  const items = restaurentsList?.map((restaurent) => (
    <Link to = {`restaurent/${restaurent?.data?.id}`} key={restaurent?.data?.id}>
    <RestaurentCard
      restaurentDetails={restaurent?.data}
    />
    </Link>
  ));
  return (
    <div className="restaurent-items-container">
      {items}
    </div>
  );
}
