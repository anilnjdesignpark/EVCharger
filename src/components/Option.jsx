import React from "react";
import { IMAGES_URl } from "../reducers/funnel";
import style from "./Option.module.css";

function Option({ icon, text, onClick }) {
  return (
    <div
      className={style.option}
      onClick={(e) => {
        onClick(text);
      }}
    >
      <img src={`${IMAGES_URl}/${icon}`} alt="ICON" className={style.icon} />
      <div className={style.text}>{text}</div>
      <span className={style.select}>select</span>
    </div>
  );
}

export default Option;
