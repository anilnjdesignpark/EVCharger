import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";

function Fusebox({ state, dispatch }) {
  const options = [
    {
      text: "upto 10 meters",
      icon: "upto-10m.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.FUSEBOX,
              value: "upto 10 meters",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.POSTCODE,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 60,
            },
          },
        ]);
      },
    },
    {
      text: "upto 11-15 meters",
      icon: "11-15m.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.FUSEBOX,
              value: "upto 11-15 meters",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.POSTCODE,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 60,
            },
          },
        ]);
      },
    },
    {
      text: "upto 16-25 meters",
      icon: "16-25m.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.FUSEBOX,
              value: "upto 16-25 meters",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.POSTCODE,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 60,
            },
          },
        ]);
      },
    },
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        How far from your <span className={common.highlight}> fusebox</span>{" "}
        will the charger be?
      </h2>
      <h4 className={common.instruction}>
        Your fusebox is sometimes called a consumer unit
      </h4>
      <Options options={options} />
    </div>
  );
}

export default Fusebox;
