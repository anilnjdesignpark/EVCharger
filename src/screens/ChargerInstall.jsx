import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";

function ChargerInstall({ state, dispatch }) {
  const options = [
    {
      text: "attached garage",
      icon: "garage.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.CHARGER_INSTALL,
              value: "attached garage"
            }
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.FUSEBOX
            }
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 40
            }
          }
        ]);
      }
    },
    {
      text: "side of house",
      icon: "car-port.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.CHARGER_INSTALL,
              value: "side of house"
            }
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.FUSEBOX
            }
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 40
            }
          }
        ]);
      }
    },
    {
      text: "detached garage",
      icon: "garage.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.CHARGER_INSTALL,
              value: "detached garage"
            }
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.CABLING_TYPE
            }
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 40
            }
          }
        ]);
      }
    },
    {
      text: "somewhere else",
      icon: "question.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.CHARGER_INSTALL,
              value: "somewhere else"
            }
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.BOOK_CALLBACK
            }
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 40
            }
          }
        ]);
      }
    }
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Where will the <span className={common.highlight}>charger</span> be
        installed?
      </h2>
      <h4 className={common.instruction}>
        This will help us work out what will be required for your installation.
        Please ensure you can detect and connect to your Wi-Fi network at your
        preferred installation point
      </h4>
      <Options options={options} />
    </div>
  );
}

export default ChargerInstall;
