import React from 'react';
import { Link } from 'react-router-dom';


const Quiztopic = ({topic}) => {
  const { id, name, logo, total}= topic
  return (
    <div className="mt-10">
      <div className="max-w-xs rounded-md  shadow-lg bg-gray-300 dark:text-gray-100">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-lime-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <Link to={`/quiz/${id}`}>
              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            </Link>
            <p className="dark:text-gray-100"></p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-900">Question : {total}</span>
            <Link
              to={`/quiz/${id}`}
              className="flex items-center  justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-white bg-teal-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiztopic;