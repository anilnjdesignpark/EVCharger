import React from "react";
import style from "./ResponseMessage.module.css";

const ResponseMessage = ({ onClick, title, subtitle, icon, buttonText }) => {
  return (
    <div className={style.container}>
      <img src={`images/${icon}`} alt={icon} className={style.icon} />
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
      <button className={style.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ResponseMessage;
