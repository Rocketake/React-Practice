import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(time);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
  return (
    <div>
      <h1>Current time:</h1>
      <p>{time}</p>
    </div>
  );
};

export default CurrentTime;
