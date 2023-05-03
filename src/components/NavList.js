import React from "react";
import { Link } from "react-router-dom";

export default function NavList({ listItems }) {
  const list = Object.keys(listItems).map((listItem, index) => (
    <li className="list-item" key={index}>
      <Link to={listItems[listItem]}>{listItem}</Link>
    </li>
  ));
  return (
    <div className="list-items">
      <ul>{list}</ul>
    </div>
  );
}
