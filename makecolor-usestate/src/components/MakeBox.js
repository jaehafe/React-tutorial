import React from 'react';

const MakeBoxUseState = ({ box, deleteBox, switchBox }) => {
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
        <button onClick={() => deleteBox(box.id)}>Delete</button>
        <button onClick={() => switchBox(box.id)}>
          {box.switch ? '네모' : '동그라미'}
        </button>
      </div>
    </>
  );
};

export default MakeBoxUseState;
