```tsx
// useState 기본 형태
const [state, setState] = useState(초기값);
```

setTime 함수를 사용해 time 함수를 변경할 수 있다

변경과 동시에 해당 컴포넌트는 업데이트(렌더링)이 발생한다

```tsx
const [time, setTime] = useState(5);
```

무거운 작업(`heavyWork`)을 해야할 땐 `useState`에 바로 값을 넣어주는 게 아니라 callback 형태로 return한다. 그렇게 되면 처음 화면에 렌더링 될때만 `heavyWork`가 불려지게 된다.

```tsx
import React, { useState } from 'react';

const heavyWork = () => {
  console.log('무거운 함수');
  return ['홍길동', '김민수'];
};

const Time = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames((prevState) => {
      console.log('prevState', prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, i) => {
        return <p key={i}>{name}</p>;
      })}
    </div>
  );
};

export default Time;
```
