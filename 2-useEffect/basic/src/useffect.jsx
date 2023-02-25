import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';

import React from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // // 1. 렌더링 될 때마다 매번 실행됨
  // useEffect(() => {
  //   console.log('렌더링');
  // }, [count]);

  // // 2. Dependency array를 넣어주면
  // // - 맨 처음 렌더링 &&
  // // - count가 바뀔 때 렌더링
  // useEffect(() => {
  //   console.log('count 변화');
  // }, [count]);

  // useEffect(() => {
  //   console.log('name 변화');
  // }, [name]);

  // 맨 처음 마운트 될 때만 실행 시키고 싶다면
  // 빈 dependency array
  useEffect(() => {
    console.log('마운팅 변화');
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <button>count: {count}</button>
      <input value={name} onChange={handleInputChange} />
      <span>{name}</span>
    </div>
  );
}

export default App;
