import React, { useState, useEffect } from 'react';

interface Props {
  activationState: boolean;
  correctCount: number;
  incorrectCount: number;
}

const Timer: React.FC<Props> = (props) => {
  const [seconds, setSeconds] = useState(60);
  const [finished, setFinished] = useState(false);
  const [WPM, setWPM] = useState(0);

  function calculateWPM() {
    let total = props.correctCount + props.incorrectCount;
    let calculatedWPM = props.correctCount; // Changed variable name to avoid conflict with state variable
    let percentage = props.correctCount / total;
    setWPM(calculatedWPM);
  }

  useEffect(() => {
    if (seconds > 0 && props.activationState) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 100);
      
      if (props.activationState && seconds == 0) {
        console.log("time over")
        setFinished(true);
        calculateWPM();
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, props.activationState, props.correctCount, props.incorrectCount]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="timer">{formatTime(seconds)} {WPM}</div>
      {finished ? <div>{WPM}</div> : null}
    </div>
  );
};

export default Timer;
