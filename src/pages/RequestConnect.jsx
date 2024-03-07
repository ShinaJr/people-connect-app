import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DisplayCard from "../components/DisplayCard";

const RequestConnect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [phoneno, setPhoneno] = useState(null);
  const [interests, setInterests] = useState([]);
  const [showCard, setShowCard] = useState(false);

  //handling the checkbox for the interests
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
    console.log("This form has submitted successfully");
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div class="w-full max-w-sm p-4 mt-10 mb-10 shadow-2xl bg-white border border-blue-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form
            class="space-y-6"
            action="#"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              Request Connect Form
            </h5>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                for="phoneno"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your phone number
              </label>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                placeholder="Enter your phone number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </div>
            <div>
              <label
                for="Interests"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Interests
              </label>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="coding"
                    type="checkbox"
                    value="coding"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("coding")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="coding"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  coding
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="writing"
                    type="checkbox"
                    value="writing"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("writing")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="writing"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  writing
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="sports"
                    type="checkbox"
                    value="sports"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("sports")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="sports"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  sports
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="music"
                    type="checkbox"
                    value="music"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("music")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="music"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  music
                </label>
              </div>
              <div class="flex items-start  mt-2">
                <div class="flex items-center h-5">
                  <input
                    id="cuisine"
                    type="checkbox"
                    value="cuisine"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("cuisine")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="cuisine"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  cuisine
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="languages"
                    type="checkbox"
                    value="languages"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("languages")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="languages"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  languages
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="drawing"
                    type="checkbox"
                    value="drawing"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("drawing")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="drawing"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  drawing
                </label>
                <div class="flex items-center h-5 ml-3">
                  <input
                    id="art"
                    type="checkbox"
                    value="art"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    checked={interests.includes("art")}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label
                  for="photography"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  art
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        {showCard && (
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <DisplayCard
              name={name}
              email={email}
              age={age}
              phoneno={phoneno}
              interests={` ${interests.join(", ")}`}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default RequestConnect;
