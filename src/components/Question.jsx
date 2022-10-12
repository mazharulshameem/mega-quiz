
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, Card } from "flowbite-react";

const Question = ({ question, handleAnswer }) => {
  const [isActive, setIsActive] = useState(true);
  const handleAnswerView = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="mt-5">
      <ToastContainer />
      <Card>
        <div className="flex justify-between ">
          <h5 className="text-xl font-semibold tracking-tight  text-gray-900 dark:text-white max-h-screen ">
            {question.question.slice(3, -4)}
          </h5>
          <FontAwesomeIcon
            onClick={handleAnswerView}
            className={isActive ? "" : "hidden"}
            icon={faEye}
          />
          <FontAwesomeIcon
            onClick={handleAnswerView}
            className={isActive ? "hidden" : ""}
            icon={faEyeSlash}
          />
        </div>
        {question.options.map((option) => (
          <div
            onClick={() => handleAnswer(option, question.correctAnswer)}
            className="cursor-pointer border-solid border-2 border-teal-600 hover:bg-purple-600 hover:text-white p-3 rounded"
          >
            {option}
          </div>
        ))}
      </Card>
      <div className={isActive ? "hidden" : ""}>
        <Alert
          color="success"
          onDismiss={function onDismiss() {
            handleAnswerView();
          }}
        >
          <span>
            <span className="font-medium py-4 px-2 text-white bg-teal-400">Correct Answer :</span>{" "}
            {question.correctAnswer}
          </span>
        </Alert>
      </div>
    </div>
  );
};

export default Question;