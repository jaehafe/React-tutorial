import React, { useState } from 'react';
import './index.css';
import Modal from './Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="modalButton">
        Modal
      </button>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
