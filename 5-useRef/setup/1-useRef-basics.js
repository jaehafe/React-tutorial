import React, { useState, useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// 렌더링 되기 전까지 같은 값 유지, re-render하지 않음
// 다시 랜더링 되어도 동일한 참조값을 유지
// focus() 를 주고 싶을 때
// 자주 바뀌는 값에 useRef를 사용하면 성능이 좋아짐
// useRef: 변화는 감지해야 하지만, 그 변화가 렌더링을 발생시키면 안돼는 값을 다룰 때 사용

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log(divContainer.current);
    console.log(refContainer.current.value);
  };

  const [name, setName] = useState('');

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  // dependency를 안 준 이유: useRef DOES NOT trigger re-render

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            ref={refContainer}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
