import { useState } from 'react';

const useInput = (initialValue, submitAction) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue('');
    submitAction(initialValue);
  };

  return [inputValue, handleChange, handleSubmit];
};

export default useInput;
