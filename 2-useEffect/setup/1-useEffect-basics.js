import React, { useState, useEffect } from 'react';

// useEffect: 1. Mount 화면에 첫 렌더링 2. Update 다시 렌더링 3. Unmount 화면에서 사라질 때
// 렌더링 될 때마다 실행
// useEffect (() => {
//   // 작업...
// })

// 1. 화면에 첫 렌더링 될 떄 실행 2. value 값이 바뀔 때
// 3. 빈 배열일 경우 컴포넌트가 화면에 첫 렌더링 될떄만 실행
// useEffect(() => {
//   //작업...
// }, [value])

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        button
      </button>
    </>
  );
};

export default UseEffectBasics;
