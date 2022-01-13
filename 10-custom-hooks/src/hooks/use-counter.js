import React, { useState, useEffect } from 'react';

const useCounter = (counterType) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterType === 'add') {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (counterType === 'subtract') {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counterType]);

  return counter;
};

export default useCounter;
