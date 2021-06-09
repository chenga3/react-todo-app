import React from "react";
import { Link, Route } from "react-router-dom";

import logo from "../images/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center mr-4">
        <img className="w-12" src={logo} alt="logo" />
        <span className="text-2xl">Producktivity</span>
      </div>
      <div className="divide-x-2">
        <Navlink text="Dashboard" route="/" />
        <Navlink text="Todos" route="/todos" />
        <Navlink text="Calendar" route="/" />
        <Navlink text="Notes" route="/" />
        <Navlink text="Pomodoro" route="/pomodoro" />
      </div>
    </div>
  );
};

interface NavlinkProps {
  text: string;
  route: string;
}

const Navlink: React.FC<NavlinkProps> = ({ text, route }: NavlinkProps) => (
  <Link className="p-2" to={route}>
    {text}
  </Link>
);

export default Navbar;
