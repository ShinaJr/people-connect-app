import React from "react";
import Bawa from "../assets/images/bawa1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-items-auto bg-gray-100 p-3 justify-between  items-center ">
      <img src={Bawa} width={150} alt="Logos" className="m-x-10  ml-20" />
      <ul className=" flex flex-row gap-x-10">
        <li className="text-lg font-semibold hover:text-blue-800 ">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg font-semibold hover:text-blue-800 ">
          <Link to="/People">People</Link>
        </li>
        <li className="text-lg font-semibold hover:text-blue-800 ">
          <Link to="/RequestConnect">RequestConnect</Link>
        </li>
      </ul>
      <button className="bg-gray-200 p-1 w-20 rounded-md mr-20 text-base font-medium border-blue-700 border-2 border-solid hover:bg-gray-400 hover:text-white">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
