import React, { useState } from 'react';
import Timer from './component/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  const handleToggle = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={handleToggle}>Toggle Timer</button>
    </div>
  );
}

export default App;
