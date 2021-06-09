import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-4">
        <img className="w-12" src={logo} alt="logo" />
        <span className="text-2xl">Producktivity</span>
      </div>
      <div className="divide-x-2">
        <Navlink text="Dashboard" />
        <Navlink text="Todos" />
        <Navlink text="Calendar" />
        <Navlink text="Notes" />
        <Navlink text="Pomodoro" />
      </div>
    </div>
  );
};

interface NavlinkProps {
  text: string;
}

const Navlink: React.FC<NavlinkProps> = ({ text }: NavlinkProps) => (
  <Link className="p-2" to="/todos">
    {text}
  </Link>
);

export default Navbar;
