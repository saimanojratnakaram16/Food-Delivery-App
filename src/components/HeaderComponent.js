import React from "react";
import { LOGO_URL } from "../utils/constants";
import NavList from "./NavList";

export default function HeaderComponent() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="company logo"
        />
      </div>
      <NavList listItems={["Home", "About","Contact US", "Cart"]} />
    </div>
  );
}
