import React from "react";
import { Link } from "react-router-dom";

interface NavlinkProps {
  text: string;
  route: string;
}

const Navlink: React.FC<NavlinkProps> = ({ text, route }: NavlinkProps) => (
  <Link className="p-2 hover:text-dark" to={route}>
    {text}
  </Link>
);

export default Navlink;
