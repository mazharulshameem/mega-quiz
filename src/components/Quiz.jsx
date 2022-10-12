import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Question from "./Question";

const Quiz = () => {
  const QuizData = useLoaderData();
  const [rightAnswer, setRightAnswer] = useState([]);
  const right = () =>
    toast.success("It is Correct Answer", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const wrong = () =>
    toast.error("It is Wrong Answer", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleAnswer = (option, correctAnswer) => {
    if (option === correctAnswer) {
      right();
      if (!rightAnswer.includes(correctAnswer)) {
        let rightAnswerArr = [...rightAnswer, correctAnswer];
        setRightAnswer(rightAnswerArr);
      }
    } else {
      wrong();
    }
  };

  return (
    <div className="mt-2">
      <h2 className="text-2xl font-semibold text-center">
        Check Mega Quiz {QuizData.data.name}
        <h3 className="font-semibold text-center mt-5 p-2 text-black rounded w-6/12 mx-auto">
          Your Score is : {rightAnswer.length}
          
        </h3>
      </h2>
      <div>
        {QuizData.questions.map((question) => (
          <Question key={question.id} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
