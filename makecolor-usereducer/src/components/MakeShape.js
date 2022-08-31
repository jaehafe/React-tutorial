import React, { useState, useReducer } from 'react';
import MakeBox from './MakeBox';

export const ACTION = {
  ADD_BOX: 'add-box',
  DELETE_BOX: 'delete-box',
  SWITCH_BOX: 'switch-box',
};
// 1.
// 4. dispatch 함수를 콜 함과 동시에 reducer 함수가 콜이 됨
const reducer = (boxes, action) => {
  switch (action.type) {
    case ACTION.ADD_BOX:
      // 5. ...boxes: previous, 즉 업데이트 전의 상태를 깔아놓고, 새로운 object(newBox)를 가져다 붙임
      // dispatch 함수 안에서의 payload의 object가 여기서 pickup됨
      // action은 dispatch에 항상 따라오는 object
      return [...boxes, newBox(action.payload.color)];
    case ACTION.DELETE_BOX:
      return boxes.filter((box) => box.id !== action.payload.id);
    case ACTION.SWITCH_BOX:
      return boxes.map((box) => {
        if (box.id === action.payload.id) {
          return { ...box, switch: !box.switch };
        }
        return box;
      });
    default:
      return [...boxes, newBox('')];
  }
};

const newBox = (color) => {
  return { id: Date.now(), color: color, switch: false };
};

const MakeShape = () => {
  // 1.
  // boxes: 관리하고 싶은 state; dispatch 함수
  // []: 기본값, 초기상태; reducer: 함수
  // 3. dispatch 함수를 콜 할 때, 항상 reducer 함수도 콜이 됨

  // reducer 함수는 현재 상태(state) 객체와 행동(action) 객체를 인자로 받아서 새로운 상태(state) 객체를 반환하는 함수
  // dispatch 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용되는데 인자로 reducer 함수에 넘길 행동(action) 객체를 받음
  const [boxes, dispatch] = useReducer(reducer, []);
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 2
    // dispatch: type 무슨 종류의 액션인지
    // payload: 추가 옵션; color를 따로 픽업해서 가져옴
    dispatch({ type: ACTION.ADD_BOX, payload: { color: color } });
    setColor('');
  };

  return (
    <div className="makeBoxContainer">
      <p>Reducer</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />{' '}
        <button>Enter</button>
      </form>

      {boxes.map((box) => {
        // payload option과 함께 dispatch를 props로 전달
        return <MakeBox key={box.id} box={box} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default MakeShape;
