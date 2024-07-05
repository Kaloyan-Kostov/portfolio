// Modal.js
import React from "react";

const Modal = ({ id, title, children }) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle hidden" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="py-4">{children}</div>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
