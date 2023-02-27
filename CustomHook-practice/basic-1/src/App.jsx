import React from 'react';
import { useState, useRef, useEffect } from 'react';
import useInput from './useInput';

const displayMessage = (message) => {
  alert(message);
};

function App() {
  const { inputValue, inputRef, handleChange, handleSubmit, handleKeyDown } =
    useInput('', displayMessage);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useInput</h1>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
