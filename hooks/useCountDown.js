"use client";

import { useEffect, useState } from "react";

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const useCountdown = (targetDate) => {
  // const countDownDate = new Date(targetDate).getTime();
  const countDownDate = targetDate;
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return getReturnValues(countDown);
};

export { useCountdown };
