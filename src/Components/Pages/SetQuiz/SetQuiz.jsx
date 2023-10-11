import React, { useState } from 'react'
import { notifyToast } from '../../Functions/notifyToast'
import './SetQuiz.css'
const SetQuiz = () => {
    const [quizData, setQuizData] = useState({ question: '', Options: '', answerText1: '', answerText2: '', answerText3: '', answerText4: '', isCorrect: '' });
    const handleInputsq = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuizData({ ...quizData, [name]: value });
    }
    const AddQuiz = async (e) => {
        e.preventDefault();
        const { question, answerText1, answerText2, answerText3, answerText4, isCorrect } = quizData;
        const res = await fetch("https://logicabackend.onrender.com/insertquestions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quiz: [{
                    question,
                    Options: [answerText1, answerText2, answerText3, answerText4]
                }
                ],
                answers: [isCorrect]
            })
        })
        if ((await res).status === 201) {
            window.location.reload(false);
            notifyToast("Subject quiz Inserted", "success");
            setQuizData('');
        } else {
            notifyToast("Subject quiz unable to Inserted", "error");
        }
    };
    return (<>
        <form className="form-main-container marginal " >
            <h3 className="form-h3">SetQuiz</h3>
            <div className="row justify-content-around">
                <div className="team-leader-container col-4">
                    <div className="details-container  ">
                        <input type="text" name="question" id="question" autocomplete="off"
                            value={quizData.question}
                            onChange={handleInputsq}
                            placeholder="Question"
                            className='w-100  form-control border-0 border-bottom border-info mb-5' />
                   
                    <div className='form-input mb-3 row '>
                        <div className='col-md-1'>
                            <input
                                type="radio"
                                id="isCorrect"
                                name="isCorrect"
                                value={0}
                                onChange={handleInputsq}
                            />
                        </div>
                        <div className='col-md-11'>
                            <input type="text" name="answerText1" id="answerText1" autocomplete="off"
                                value={quizData.answerText1}
                                onChange={handleInputsq}
                                placeholder="Add Answer"
                                className='w-100  form-control border-0 border-bottom border-info' />
                        </div>
                    </div>
                    <div className='form-input mb-3 row '>
                        <div className='col-md-1'>
                            <input
                                type="radio"
                                id="isCorrect"
                                name="isCorrect"
                                value={1}
                                onChange={handleInputsq}
                            />
                        </div>
                        <div className='col-md-11'>
                            <input type="text" name="answerText2" id="answerText2" autocomplete="off"
                                value={quizData.answerText2}
                                onChange={handleInputsq}
                                placeholder="Add Answer" className='w-100 form-control border-0 border-bottom border-info' />
                        </div>
                    </div>
                    <div className='form-input mb-3 row '>
                        <div className='col-md-1'>
                            <input
                                type="radio"
                                id="isCorrect"
                                name="isCorrect"
                                value={2}
                                onChange={handleInputsq}
                            />
                        </div>
                        <div className='col-md-11'>
                            <input type="text" name="answerText3" id="answerText3" autocomplete="off"
                                value={quizData.answerText3}
                                onChange={handleInputsq}
                                placeholder="Add Answer" className='w-100 form-control border-0 border-bottom border-info' />
                        </div>
                    </div>
                    <div className='form-input mb-3 row '>
                        <div className='col-md-1'>
                            <input
                                type="radio"
                                id="isCorrect"
                                name="isCorrect"
                                value={3}
                                onChange={handleInputsq}
                            />
                        </div>
                        <div className='col-md-11'>
                        
                            <input type="text" name="answerText4" id="answerText4" autocomplete="off"
                                value={quizData.answerText4}
                                onChange={handleInputsq}
                                placeholder="Add Answer" className='w-100  form-control border-0 border-bottom border-info' />
                       </div>
                    </div>
                    <div className='form-group'>
                        <div className='text-center fw-bold'>
                            <input type="submit" name="signin" id="signin" className='text-center btn btn-success'
                                value="Add Quiz"
                                onClick={AddQuiz}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </>
    )
}
export default SetQuiz