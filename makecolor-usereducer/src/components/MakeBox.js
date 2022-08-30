import React from 'react';
import { ACTION } from './MakeShape';

const MakeBox = ({ box, dispatch }) => {
  return (
    <>
      <div className="makeBoxRow">
        <div
          className="newBox"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: box.color,
            borderRadius: box.switch ? '50%' : '0',
          }}
        ></div>
        <button
          onClick={() =>
            dispatch({ type: ACTION.DELETE_BOX, payload: { id: box.id } })
          }
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTION.SWITCH_BOX, payload: { id: box.id } })
          }
        >
          {box.switch ? '네모' : '동그라미'}
        </button>
      </div>
    </>
  );
};

export default MakeBox;
