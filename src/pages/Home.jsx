import React from "react";
import Navbar from "../components/Navbar";
import BG from "../assets/images/bg3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row ml-10 ">
        <div className="content-center align-center my-auto">
          <motion.h1
            className="text-3xl font-bold text-center pb-10 txt-black mt-5"
            animate={{ x: [30, 150, 30], opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            // whileHover={{ scale: 1 }}
          >
            <motion.span className="font-bold text-blue-700 text-4xl">
              Bawa{" "}
            </motion.span>
            helps you connect with amazing people and make long-life
            friendships...
          </motion.h1>
          <motion.h1
            animate={{ x: [30, 150, 30], opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
            className="text-xl font-bold text-center pb-10 txt-black mt-2"
          >
            Click the button 👇 to begin a journey of a lifetime
          </motion.h1>
          <motion.button
            animate={{ x: [30, 150, 30], opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
            type="button"
            className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-xl hover:bg-blue-200 hover:text-black content-center align-center mx-64 px-10"
          >
            <Link to="./People">Connect</Link>
          </motion.button>
        </div>
        <motion.div
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 30, 60, 240, 360],
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 3 }}
          className="my-auto mt-10 mr-20"
          // key={image}
        >
          <img
            src={BG}
            width={1000}
            alt=""
            style={{
              borderRadius: "15px",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px",
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
