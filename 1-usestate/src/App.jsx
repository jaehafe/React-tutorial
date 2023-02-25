import { useState } from 'react';
import './App.css';
import Time from './time';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          {console.log('count', count)}
        </button>
      </div>
      <Time />
    </div>
  );
}

export default App;
