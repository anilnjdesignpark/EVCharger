import React from "react";
import style from "./Option.module.css";

function Option({ icon, text, onClick }) {
  return (
    <div
      className={style.option}
      onClick={(e) => {
        onClick(text);
      }}
    >
      <img src={`images/${icon}`} alt="ICON" className={style.icon} />
      <div className={style.text}>{text}</div>
      <span className={style.select}>select</span>
    </div>
  );
}

export default Option;
