import React, { useState } from 'react';
import MakeBox from './MakeBox';

const MakeShape = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');

  const newBox = (color) => {
    return { id: Date.now(), color: color, switch: false };
  };

  const addBox = (color) => {
    return [...boxes, newBox(color)];
  };

  const deleteBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  const switchBox = (id) => {
    setBoxes(
      boxes.map((box) => {
        if (box.id === id) {
          return { ...box, switch: !box.switch };
        }
        return box;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes(addBox(color));
    setColor('');
  };

  return (
    <div className="makeBoxContainer">
      <p>State</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Enter</button>
      </form>

      {boxes.map((box) => {
        return (
          <MakeBox
            key={box.id}
            box={box}
            deleteBox={deleteBox}
            switchBox={switchBox}
          />
        );
      })}
    </div>
  );
};

export default MakeShape;

// const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수(기본값)>)
// dispatch를 콜 할때마다 reduce함수가 항상 콜이 됨
// <상태객체>: pass, acton: dispatch에 항상 따라오는 object
