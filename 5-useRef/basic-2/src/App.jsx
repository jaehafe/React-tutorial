import React, { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef('hi');

  useEffect(() => {
    console.log('inputRef', inputRef);
    inputRef.current.focus();
  }, []);

  const showAlert = (message) => {
    alert(`환영합니다 ${message}`);
  };

  const clearAndFocusInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const login = () => {
    showAlert(inputRef.current.value);
    clearAndFocusInput();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      showAlert(inputRef.current.value);
      clearAndFocusInput();
    }
  };

  return (
    <div>
      <input ref={inputRef} onKeyDown={handleKeyDown} placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
