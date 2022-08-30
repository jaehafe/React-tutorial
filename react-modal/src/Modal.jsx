import React from 'react';
import nft from './nft.jpeg';

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div onClick={close} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={nft} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={close}>
            X
          </p>
          <div className="content">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love NFT's
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
