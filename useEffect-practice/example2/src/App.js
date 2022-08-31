import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log('렌더링');
  });

  // (마운팅)처음 렌더링 됐을 때와, count가 변화될 때마다 실행
  useEffect(() => {
    console.log('count 렌더링');
  }, [count]);

  // (마운팅)처음 렌더링 됐을 때와, name이 변화될 때마다 실행
  useEffect(() => {
    console.log('name 렌더링');
  }, [name]);

  // (마운팅)처음 렌더링 될 때만
  useEffect(() => {
    console.log('마운팅');
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;
