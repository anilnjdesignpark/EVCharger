import React from "react";
import style from "./ProgressBar.module.css";

function ProgressBar({ value }) {
  return (
    <div className={style.container}>
      <div className={style.progress} style={{ width: value }}></div>
    </div>
  );
}

export default ProgressBar;
