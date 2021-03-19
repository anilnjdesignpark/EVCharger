import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";
function HaveVehicle({ state, dispatch }) {
  const options = [
    {
      text: "yes",
      icon: "yes",
      handler: function () {
        dispatch({
          type: Actions.CHANGE_SCREEN,
          payload: {
            nextScreen: Screens.OFFSTREET_PARKING,
          },
        });
      },
    },
    {
      text: "no",
      icon: "no",
      handler: function () {
        dispatch({
          type: Actions.CHANGE_SCREEN,
          payload: {
            nextScreen: Screens.OFFSTREET_PARKING,
          },
        });
      },
    },
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Did you purchase or start leasing your vehicle after
        <span className={common.highlight}> 1st October 2016</span>
      </h2>
      <h4 className={common.instruction}>
        You need to have purchased or started leasing the vehicle after this
        date to be eligible for the{" "}
        <a href="xyz.com" className={common.link}>
          OLEV
        </a>
        grant
      </h4>
      <Options options={options} />
    </div>
  );
}

export default HaveVehicle;
