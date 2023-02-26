import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}

export default App;
