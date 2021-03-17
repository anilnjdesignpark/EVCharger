import React from "react";
import style from "./Dialog.module.css";

const Dialog = ({ visible, children }) => {
  return visible && <div className={style.overlay}>{children}</div>;
};

export default Dialog;
