import { useCallback, useEffect, useState } from "react";

const useTimer = (interval: number = 30, runFromStart: boolean = false) => {
  const [timer, setTimer] = useState(interval);
  const [isRunning, setIsRunning] = useState(runFromStart);

  const start = useCallback(() => {
    setTimer(interval);
    setIsRunning(true);
  }, [interval]);

  const stop = useCallback(() => {
    setTimer(interval);
    setIsRunning(false);
  }, [interval]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleTimer = () => {
      if (timer !== 0) {
        setTimer(prevTimer => prevTimer - 1);
      }
    };

    if (isRunning) {
      intervalId = setInterval(handleTimer, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timer, interval]);

  return { timer, isRunning, start, stop };
};

export default useTimer;
