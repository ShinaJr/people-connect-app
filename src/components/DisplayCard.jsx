import React from "react";

const DisplayCard = ({ name, email, age, phoneno, interests }) => {
  return (
    <>
      <div class="flex flex-col m-10 bg-white border shadow-2xl rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="bg-gray-800/[.1] border border-gray-200 text-sm text-gray-800 p-4 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white">
          <span class="font-bold text-lg text-green-600">Thank you!</span> Your
          request is sent.
        </div>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Here are your details:
          </h3>
          <div>
            <p class="text-md font-normal text-gray-800 dark:text-white">
              Name: {name}
            </p>
            <p class="text-md font-normal text-gray-800 dark:text-white">
              Email: {email}
            </p>
            <p class="text-md font-normal text-gray-800 dark:text-white">
              Age: {age} years old
            </p>
            <p class="text-md font-normal text-gray-800 dark:text-white">
              Phone Number: {phoneno}
            </p>
            <p class="text-md font-normal text-gray-800 dark:text-white">
              Interests: {interests}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;
