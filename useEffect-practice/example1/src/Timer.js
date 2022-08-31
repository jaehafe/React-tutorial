import React, { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <span>타이머 시작</span>
    </div>
  );
};

export default Timer;
