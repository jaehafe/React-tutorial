import React, { useState, useReducer } from 'react';
import Students from './Students';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return {
              ...student,
              isHere: !student.isHere,
            };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [
    // {
    //   id: Date.now(),
    //   name: 'James',
    //   isHere: false,
    // },
  ],
};

const App = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
  };
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <form
        action="submit
      "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          // payload: {name} -> 현재 input 안에 있는 name
          onClick={() => dispatch({ type: 'add-student', payload: { name } })}
        >
          추가
        </button>
      </form>
      {studentsInfo.students.map((student) => {
        return (
          <Students
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
};

export default App;
