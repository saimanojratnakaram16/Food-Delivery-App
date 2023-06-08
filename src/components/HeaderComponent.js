import React from "react";
import LOGO_URL from "../assets/img/logo.png";
import NavList from "./NavList";

const navs = {
  "Home" : "/",
  "About" : "/about",
  "Contact Us" : "/contact",
  "Cart" : "/cart",
}

export default function HeaderComponent() {
  return (
    <div className="flex justify-between border-2 border-slate-400">
      <div className="w-24">
        <img
          src={LOGO_URL}
          alt="company logo"
        />
      </div>
      <NavList listItems={navs} />
    </div>
  );
}
