import React from "react";
import style from "./Question.module.css";

function Question({ text }) {
  return (
    <h2
      className={style.container}
      dangerouslySetInnerHTML={{ __html: text }}
    ></h2>
  );
}

export default Question;
