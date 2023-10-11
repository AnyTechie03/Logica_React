import React, { useState, useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
  const targetDate = new Date('2023-10-31T10:00:00Z'); // Add 10 hours to the target date
  const currentDate = new Date();

  const timeRemaining = targetDate.getTime() - currentDate.getTime();

  const [countdown, setCountdown] = useState(timeRemaining);
  const [showGameStart, setShowGameStart] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1000);
    }, 1000);

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      setShowGameStart(true);
    }

    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);

  return (
    <div className="schedule-container" id='Schedule'>
      <div className="timer">
        {countdown > 0 ? (
          <>
            <h1 className='title'>Game Will Begin in</h1>
            <span>{formatTime(countdown)}</span>
          </>
        ) : showGameStart && (
          <div className="game-start">Game Start!</div>
        )}
      </div>
    </div>
  );
};

const formatTime = (milliseconds) => {
  const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
  const hours = Math.floor((milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);

  return `${days} d : ${hours} h : ${minutes} m : ${seconds} s`;
};

export default Schedule;
