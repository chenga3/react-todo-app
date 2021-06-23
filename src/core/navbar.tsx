import React from "react";

import Navlink from "./Navlink";

import logo from "../images/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center bg-green-light px-4 py-2">
      <div className="flex flex-row items-center mr-4 pr-5 border-r-2 border-black border-opacity-50">
        <img className="w-12" src={logo} alt="logo" />
        <span className="text-2xl font-bold">
          Pro<span className="text-orange">duck</span>tivity
        </span>
      </div>
      <div>
        <Navlink text="Dashboard" route="/" />
        <Navlink text="Todos" route="/todos" />
        <Navlink text="Calendar" route="/" />
        <Navlink text="Notes" route="/" />
        <Navlink text="Pomodoro" route="/pomodoro" />
      </div>
    </div>
  );
};

export default Navbar;
