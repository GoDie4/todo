import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="fixed w-full inset-0 m-auto bg-black/60 h-full  flex items-center justify-center">{children}</div>,
    document.getElementById('modal')
    );
};

export { Modal };
