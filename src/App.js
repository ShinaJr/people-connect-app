import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import People from "./pages/People";
import Home from "./pages/Home";
import RequestConnect from "./pages/RequestConnect";

function App() {
  const [users, setUsers] = useState([]);

  //using te useEffect hookk to fetch data from an api immediately the page mounts on the web
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        console.log(response.data.results);
        setUsers(response.data.results);
      } catch (e) {
        console.log("An error occurred", e);
      } finally {
        console.log("This is finished");
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/People" element={<People users={users} />} />
        <Route path="/RequestConnect" element={<RequestConnect />} />
      </Routes>
    </div>
  );
}

export default App;
