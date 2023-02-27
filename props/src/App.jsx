import React from 'react';
import MyComponent from './component/MyComponent';

const person = {
  firstname: '이재하',
  age: 100,
  power: 'sincere',
};
function App() {
  return (
    <div>
      <MyComponent person={person} />
    </div>
  );
}

export default App;
