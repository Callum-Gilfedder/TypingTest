import React, { useState, useEffect } from 'react';

interface Props {
  activationState: boolean;
}

const Timer: React.FC<Props> = (props) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0 && props.activationState) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, props.activationState]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer">{formatTime(seconds)}</div>
  );
};

export default Timer;
