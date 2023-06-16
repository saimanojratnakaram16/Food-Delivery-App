import React,{useContext} from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../assets/img/new_logo.png";
import UserDataContext from "../contexts/UserDataContext";
import NavList from "./NavList";
import useOnlineCheck from "../hooks/useOnlineCheck";



const navs = {
  "Home" : "/",
  "Help" : "/help",
  "Contact Us" : "/contact",
  "Cart" : "/cart",
  "Profile": "/profile",
}

export default function HeaderComponent() {
  const {userData} = useContext(UserDataContext);
  const isOnline = useOnlineCheck();
  return (
    <>
    <div className="flex items-center justify-between border-2 border-slate-400">
      <div className="flex items-center">
        <Link to="/">
        <img
          src={LOGO_URL}
          className="w-24 mx-2"
          alt="company logo"
        />
          </Link>
          <div className="py-2 font-serif">
          <p > Welcome back, {userData.name}!</p>
          <p className="text-xs"> Hungry for delicious food? We've got you covered.</p>
          </div>
      </div>
      <NavList listItems={navs} />
    </div>
    {
      !isOnline && <div className="font-serif bg-red-400 text-white border-b-2 border-x-2 border-slate-400 rounded-b-md">Unable to connect to the internet. Please check your network connection and try again later.</div>
    }
    </>
  );
}
