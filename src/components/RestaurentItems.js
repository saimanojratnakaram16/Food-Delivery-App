import React from "react";
import { Link } from "react-router-dom";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";

export default function RestaurentItems({ restaurentsList }) {
  const PromotedRestaurent = withPromotedLabel(RestaurentCard);

  const items = restaurentsList?.map((restaurent) => (
    <Link to = {`restaurent/${restaurent?.id}`} key={restaurent?.id}>
   {restaurent?.promoted ? <PromotedRestaurent  restaurentDetails={restaurent}/> : <RestaurentCard
      restaurentDetails={restaurent}
    />}
    </Link>
  ));
  return (
    <div className="mx-5 my-2 flex flex-wrap" data-testid = "restaurants-list">
      {items}
    </div>
  );
}
