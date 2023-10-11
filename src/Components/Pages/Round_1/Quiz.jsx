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
  };

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
  };
  const Navigate = useNavigate()
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("https://logicabackend.onrender.com/questions",{   
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    withCredntials: true,
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

  }, []);

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
      withCredntials: true,
      credentials: "include",
      body: JSON.stringify({ correctCount })
    })
  };

  return (
    <div className="Container">
      {questions.length === 0 ? (
        <Gloading />
      ) : (
        <div  >
          {isSubmitted ? (
            <div>
              <h3>Your Score: {score} out of {questions.length}</h3>
            </div>
          ) : (
            <div className="QMcontainer" >
              <div className="qcontainer" >
            <h2 className="title">Quiz</h2>
                <h4 className="Question_Container text-light  pt-2">{questions[currentQuestionIndex].question}</h4>
                <div className="Answer_Container ">


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
                          <div className={`check ${selectedOptions[currentQuestionIndex]== optionIndex ? 'checked':''}`}></div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No options available for this question.</p>
                  )}
                </div>
              <div className='grid'>
                {currentQuestionIndex > 0 ? (
                  <button className="btn prev" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                <button className="btn next" onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                  Next
                </button>
                {currentQuestionIndex === questions.length - 1 && (
                  <button onClick={handleSubmit}>Submit</button>
                )}
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
