import React, { useState } from 'react';
import { useRef } from 'react';

function useInput(initialValue, displayMessage) {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputRef = useRef('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearAndFocusInput = () => {
    setInputValue('');
    displayMessage(inputValue);
    inputRef.current.focus();
  };

  const handleSubmit = () => {
    clearAndFocusInput();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      clearAndFocusInput();
    }
  };

  return {
    inputValue,
    handleChange,
    handleSubmit,
    inputRef,
    handleKeyDown,
  };
}

export default useInput;
