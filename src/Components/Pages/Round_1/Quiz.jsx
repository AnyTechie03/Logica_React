import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Quiz.css'
import Gloading from "../Loading/Gloading";

function Quiz() {
  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const successnotify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const Navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const [isTimeout, setIsTimeout] = useState(false);
  const [quizTimeout, setQuizTimeout] = useState(30 * 60 * 1000); // 30 minutes in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(quizTimeout);

  useEffect(() => {
    fetch("https://logicabackend.onrender.com/questions", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "include"
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 401) {
          notify('Login to Play Quiz')
          Navigate('/login')
        }
        else {
          successnotify(`Let's Quizee it!!`)
          response.json()
            .then((data) => {
              setQuestions(data);
              setSelectedOptions(new Array(data.length).fill(null));
            })
            .catch((error) => {
              console.error("Error fetching questions:", error);
            });
        }
      })  
const interval = setInterval(() => {
    setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1000);
  }, 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (timeRemaining <= 0) {
    setIsTimeout(true);
    handleSubmit();
  }
}, [timeRemaining]);

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / (60 * 1000));
  const seconds = ((milliseconds % (60 * 1000)) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

  const handleOptionSelect = (optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      const correctAnswerIndex = question.CorrectAns - 1; // Convert to 0-based index
      if (selectedOptions[index] === correctAnswerIndex) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsSubmitted(true);
    console.log(correctCount);
    const res = fetch('https://logicabackend.onrender.com/QuizSubmit', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "include",
      body: JSON.stringify({ correctCount })
    });
  };

  return (
    <div className="Container">
      {questions.length === 0 ? (
        <Gloading />
      ) : (
        <div>
          {isSubmitted ? (
            <div>
              <h3>Your Score: {score} out of {questions.length}</h3>
            </div>
          ) : isTimeout ? (
            <div>
              <h3>Timeout: Quiz Over</h3>
            </div>
          ) : (
            <div class="container mt-5 qcontainer">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="d-flex flex-row justify-content-between align-items-center mcq p-3 border-bottom">
                <h2 className="title">Quiz</h2>
               {/* <span>({questions[currentQuestionIndex]} of {questions[currentQuestionIndex].length})</span> */}
                <div className="timer">
                  <p>Time Remaining: {formatTime(timeRemaining)}</p>
                </div>
                  </div>
                <h4 className="Question_Container text-light pt-2">{questions[currentQuestionIndex].question}</h4>
                <div className="Answer_Container">
               <div class="ans ml-2">
                  {Array.isArray(questions[currentQuestionIndex].options) ? (
                    <ul>
                      {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                          <input
                            type="radio"
                            name={`question${currentQuestionIndex}`}
                            value={option}
                            checked={selectedOptions[currentQuestionIndex] === optionIndex}
                            onChange={() => handleOptionSelect(optionIndex)}
                          />
                          <label className='text-prim' htmlFor={`option${optionIndex}-option`}>{option}</label>
                          <div className={`check ${selectedOptions[currentQuestionIndex] == optionIndex ? 'checked text-center' : 'text-center'}`}></div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No options available for this question.</p>
                  )}
                   </div>
                </div>
                <div className='grid'>
                  {currentQuestionIndex > 0 ? (
                    <button className="btn prev mt-1 mr-1" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}
                  <button className="btn next ml-2" onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                    Next
                  </button>
                  {currentQuestionIndex === questions.length - 1 && (
                    <button onClick={handleSubmit}>Submit</button>
                  )}
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;