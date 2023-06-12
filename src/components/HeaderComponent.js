import React,{useContext} from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../assets/img/logo.png";
import UserDataContext from "../contexts/UserDataContext";
import NavList from "./NavList";


const navs = {
  "Home" : "/",
  "Help" : "/help",
  "Contact Us" : "/contact",
  "Cart" : "/cart",
  "Profile": "/profile",
}

export default function HeaderComponent() {
  const {userData} = useContext(UserDataContext);
  return (
    <div className="flex items-center justify-between border-2 border-slate-400">
      <div className="">
        <Link to="/">
        <img
          src={LOGO_URL}
          className="w-24"
          alt="company logo"
        />
         <div className="text-center text-sm">FoodHub</div>
          </Link>
      </div>
      <NavList listItems={navs} />
    </div>
  );
}
