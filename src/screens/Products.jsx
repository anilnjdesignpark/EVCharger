import React from "react";
import Charger from "../components/Charger";
import common from "./Common.module.css";
import { CarData, ChargerData, IMAGES_URl, Screens } from "../reducers/funnel";
import style from "./Products.module.css";

const Products = ({ state, dispatch, onRestart }) => {
  const { brand, model } = state.selectedOptions[Screens.CAR_SELECT].value;
  const chargerInstall = state.selectedOptions[Screens.CHARGER_INSTALL].value;

  function getCar() {
    return CarData.filter((car) => car.name === brand)[0];
  }

  function getCarIcon() {
    return getCar().icon;
  }

  console.log(state.selectedOptions[Screens.CHARGER_INSTALL].value);

  return (
    <div className={common.screen}>
      <h1 className={common.question}>Pick your charger</h1>

      <section className={style.container}>
        <div className={style.restart} onClick={onRestart}>
          <img
            src={`${IMAGES_URl}/restart.svg`}
            alt="[]"
            className={style.icon}
          />
          <div className={style.text}>restart</div>
        </div>
        <div className={style.brand}>
          <img
            src={`${IMAGES_URl}/${getCarIcon()}`}
            alt="[]"
            className={style.icon}
          />
          <div className={style.text}>{brand}</div>
        </div>
        <div className={style.fusebox}>
          <img
            src={`${IMAGES_URl}/${
              state.selectedOptions[Screens.CHARGER_INSTALL].value
            }.png`}
            alt="[]"
            className={style.icon}
          />
          <div className={style.text}>{chargerInstall}</div>
        </div>
      </section>

      {ChargerData.map((charger) => (
        <Charger
          key={charger.id}
          charger={charger}
          state={state}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Products;
