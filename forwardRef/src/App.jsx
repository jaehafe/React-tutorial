import React from 'react';
import { useRef } from 'react';
import MyInput from './MyInput';

function App() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focus}>집중</button>
    </div>
  );
}

export default App;
