import React from "react";
import Navbar from "../components/Navbar";
import PeopleCard from "../components/PeopleCard";

const People = ({ users }) => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center pb-10 text-black mt-5">
        Send a request to connect with different people on{" "}
        <span className="font-bold text-blue-700 text-4xl">Bawa</span>
      </h1>
      <main
        className="ml-20 mt-5 pb-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "auto",
        }}
      >
        {users.map((user, index) => {
          return (
            <PeopleCard
              key={index}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              age={user.dob.age}
              email={user.email}
              image={user.picture.large}
            />
          );
        })}
      </main>
    </>
  );
};

export default People;
