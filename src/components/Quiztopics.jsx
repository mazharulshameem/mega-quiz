import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Quiztopic from './Quiztopic';


const Quiztopics = () => {
  const QuizTopic = useLoaderData()
  return (
    <div>
      <Header></Header>
      <div className=" sm:w-auto lg:w-auto   md:mt-2 mt-5 lg:mx-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1   gap-4 mb-10">
        {QuizTopic.data.map((topic) => (
          <Quiztopic key={topic.id} topic={topic}></Quiztopic>
        ))}
      </div>
    </div>
  );
};

export default Quiztopics;