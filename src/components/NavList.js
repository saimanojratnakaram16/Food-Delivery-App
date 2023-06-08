import React from "react";
import { Link } from "react-router-dom";

export default function NavList({ listItems }) {
  const list = Object.keys(listItems).map((listItem, index) => (
    <li className="p-2 m-2" key={index}>
      <Link to={listItems[listItem]}>{listItem}</Link>
    </li>
  ));
  return (
    <div className="pr-20 flex">
      <ul className="flex justify-between items-center">{list}</ul>
    </div>
  );
}
