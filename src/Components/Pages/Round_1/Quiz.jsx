import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Quiz.css'
import Gloading from "../Loading/Gloading";
import Score from "./Score";

function Quiz() {
  const Notify = (message) => {
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

  const SuccessNotify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }
  const Navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const [isTimeout, setIsTimeout] = useState(false);
  const [quizTimeout] = useState(30 * 60 * 1000);
  const [timeRemaining, setTimeRemaining] = useState(quizTimeout);

  useEffect(() => {
   checkUniversal();

  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsTimeout(true);
      handleSubmit();
    }
  }, [timeRemaining]);

  const checkUniversal= ()=>{
    fetch('https://angry-moon-10536.pktriot.net/checkuniversal',{
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "include"
    }).then((res)=> res.json()).then((response)=>{
      if(response.Universal[0].level_1){
        console.log("Quiz Has Started");
        if(!response.Data.Level_1_Score){
          console.log("And as you have not answered the game, you can play it.");
          fetchQuestions();
          startTimer();        
        }
        else{
          //Sir handle here what to show user if he has answered the quiz. My suggestion is to show him his score.
          //His score can be accessed from response.Data.Level_1_Score
          console.log("But You have Answered the Game So you cannot play it");
        }
      }
    })
  }

  const fetchQuestions = () => {
    fetch("https://angry-moon-10536.pktriot.net/questions", {
      method: 'GET',
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "include"
    })
      .then((response) => {
        if (response.status === 401) {
          Notify('Login to Play Quiz')
          Navigate('/login')
        } else {
          SuccessNotify(`Let's Quizee it!!`);
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
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1000);
    }, 1000);
    return () => clearInterval(interval);
  };

  const handleOptionSelect = (optionIndex) => {
    //
      const data = {
        selectedOptions: selectedOptions,
      };
    
      fetch('https://angry-moon-10536.pktriot.net/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Quiz submission failed.');
          }
        })
        .then((data) => {
          // Update the state with the received score
          setScore(data.score);
          setIsSubmitted(true);
          console.log('Your Score is',data.score);
        })
        .catch((error) => {
          console.error('Error submitting quiz:', error);
        });
    
    
    //
    
  };

  const navigateToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleSubmit = () => {
    let correctCount = questions.reduce((count, question, index) => {
      const correctAnswerIndex = question.CorrectAns - 1;
      return selectedOptions[index] === correctAnswerIndex ? count + 1 : count;
    }, 0);

    setScore(correctCount);
    setIsSubmitted(true);

    fetch('https://angry-moon-10536.pktriot.net/QuizSubmit', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "include",
      body: JSON.stringify({ correctCount })
    });
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = ((milliseconds % (60 * 1000)) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="Container qmContainer">
      {questions.length === 0 ? (
        <Gloading />
      ) : (
        <div>
          {isSubmitted ? (
            <div>
              <Score score={score} level={'level_1'}/>
            </div>
          ) : isTimeout ? (
            <div>
              <h3>Timeout: Quiz Over</h3>
            </div>
          ) : (
            <div className="container mt-5 qcontainer">
              <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                  <div className="d-flex flex-row justify-content-between align-items-center mcq p-3 border-bottom">
                    <h2 className="title">Quiz</h2>
                    <span>({currentQuestionIndex + 1} of {questions.length})</span>
                    <div className="timer">
                      <p>Time Remaining: {formatTime(timeRemaining)}</p>
                    </div>
                  </div>
                  <h4 className="Question_Container text-light pt-2">{questions[currentQuestionIndex].question}</h4>
                  <div className="Answer_Container">
                    <div className="ans ml-2">
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
                              <div className={`check ${selectedOptions[currentQuestionIndex] === optionIndex ? 'checked text-center' : 'text-center'}`}>
                              <label className='text-prim' htmlFor={`option${optionIndex}-option`}>{option}</label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No options available for this question.</p>
                      )}
                    </div>
                  </div>
                  <div className='grid'>
                    <button className="btn prev mt-1 mr-1" onClick={() => navigateToQuestion(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0}>
                      Previous
                    </button>
                    <button className="btn next ml-2" onClick={() => navigateToQuestion(currentQuestionIndex + 1)} disabled={currentQuestionIndex === questions.length - 1}>
                      Next
                    </button>
                    {currentQuestionIndex === questions.length - 1 && (
                      <button className="btn next ml-2" onClick={handleSubmit}>Submit</button>
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
