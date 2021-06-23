import React from "react";
import { NavLink } from "react-router-dom";

interface NavlinkProps {
  text: string;
  route: string;
}

const Navlink: React.FC<NavlinkProps> = ({ text, route }: NavlinkProps) => (
  <NavLink
    className="p-2 font-medium hover:text-dark"
    activeClassName="border-b-2 border-orange border-opacity-50"
    to={route}
  >
    {text}
  </NavLink>
);

export default Navlink;
