import React from "react";
import Option from "./Option";
import style from "./Options.module.css";

function Options({ options }) {
  return (
    <section className={style.options}>
      {options.map((option, i) => (
        <Option
          key={i}
          text={option.text}
          icon={option.icon}
          onClick={option.handler}
        />
      ))}
    </section>
  );
}

export default Options;
