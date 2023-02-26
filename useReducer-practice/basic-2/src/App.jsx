import { useState, useReducer, useRef } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
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
            return { ...student, isHere: !student.isHere };
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

function App() {
  const inputRef = useRef('asd');
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  console.log(studentsInfo);

  const clearAndFocusInput = () => {
    setName('');
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      nameDispatch();
    }
  };

  const nameDispatch = () => {
    dispatch({ type: 'add-student', payload: { name } });
    clearAndFocusInput();
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={nameDispatch}>추가</button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
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
}

export default App;
