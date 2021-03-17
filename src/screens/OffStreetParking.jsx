import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";

function OffStreetParking({ state, dispatch }) {
  const options = [
    {
      text: "yes",
      icon: "yes.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.OFFSTREET_PARKING,
              value: "yes",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.CHARGER_INSTALL,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 30,
            },
          },
        ]);
      },
    },
    {
      text: "no",
      icon: "no.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.OFFSTREET_PARKING,
              value: "no",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.BOOK_CALLBACK,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 80,
            },
          },
        ]);
      },
    },
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Do you have <span className={common.highlight}> off-street </span>{" "}
        parking?
      </h2>
      <h4 className={common.instruction}>
        We can only install at locations with off-street parking. The cabling
        from your home to your charger <strong>must not</strong> run across
        publicly owned land.
      </h4>
      <Options options={options} />
    </div>
  );
}

export default OffStreetParking;
