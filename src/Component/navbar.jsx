import React from 'react';
import navimg from "../assets/logo.png";

const Navbar = ({AbailableValance}) => {
    return (
         <div className="navbar">
          <div className="flex-1">
            <a className=" text-xl">
              <img className="w-[70px]" src={navimg} alt="" />
            </a>
          </div>
          <div className="flex-none flex gap-7 items-center">
            <span className="border border-[#a09898ee] px-4 py-2 rounded-2xl">
              {AbailableValance} <span className="font-semibold">Coin 🪙</span>
            </span>
          </div>
        </div>
    );
};

export default Navbar;