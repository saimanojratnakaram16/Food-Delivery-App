import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavList({ listItems }) {
  const selector = useSelector(store=>store.cart.items);
  const list = Object.keys(listItems).map((listItem, index) => (
    <li className="p-2 m-2" key={index}>
      <Link to={listItems[listItem]}>{listItem==='Cart'? (selector.length ? selector.length+" ": "")+listItem: listItem}</Link>
    </li>
  ));
  return (
    <div className="pr-20 flex">
      <ul className="flex justify-between items-center">{list}</ul>
    </div>
  );
}
