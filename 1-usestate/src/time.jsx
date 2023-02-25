import React, { useState } from 'react';

const heavyWork = () => {
  console.log('무거운 함수');
  return ['홍길동', '김민수'];
};

const Time = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames((prevState) => {
      console.log('prevState', prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, i) => {
        return <p key={i}>{name}</p>;
      })}
    </div>
  );
};

export default Time;
