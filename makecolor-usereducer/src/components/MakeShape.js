import React, { useState, useReducer } from 'react';
import MakeBox from './MakeBox';

export const ACTION = {
  ADD_BOX: 'add-box',
  DELETE_BOX: 'delete-box',
  SWITCH_BOX: 'switch-box',
};
// action은 dispatch에 항상 따라오는 object
const reducer = (boxes, action) => {
  switch (action.type) {
    case ACTION.ADD_BOX:
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
  // boxes: 관리하고 싶은 state; dispatch 함수
  // []: 기본값; reducer: 함수
  // dispatch 함수를 콜 할 때, 항상 reducer 함수도 콜이 됨
  // []: 초기상태
  const [boxes, dispatch] = useReducer(reducer, []);
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
