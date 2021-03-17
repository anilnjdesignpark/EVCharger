import React from "react";
import { IMAGES_URl } from "../reducers/funnel";
import style from "./Loading.module.css";

function Loading({ text = "processing..." }) {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <img
          className={style.icon}
          src={`${IMAGES_URl}/loading.svg`}
          alt="loadingIcon"
        />
        <div className={style.text}>{text}</div>
      </div>
    </div>
  );
}

export default Loading;
