import React, { useState, useEffect } from 'react';

// clean up function
// useEffect(() => {
//   // 구독...
//   return () => {
//     // 구독 해지
//   };
// }, []);

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  console.log('render');

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
