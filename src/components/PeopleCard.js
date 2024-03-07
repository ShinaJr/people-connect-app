import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ name, age, email, image }) => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-blue-500 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-10 ease-linear transform hover:scale-90 transition duration-500 border-3"
      style={{
        backgroundColor: "#E5E4E2",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px",
      }}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {age} years old
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {email}
        </p>
      </div>
      <button
        className="inline-flex items-center px-1 py-2 text-xs font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ position: "relative", top: "60px" }}
      >
        <Link to="/RequestConnect"> Request to Connect</Link>
      </button>
    </div>
  );
};

export default PeopleCard;
