import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";

function CablingType({ state, dispatch }) {
  const options = [
    {
      text: "underground",
      icon: "cables_underground.jpg",
      handler: function () {
        dispatch({
          type: Actions.SET_OPTIONS,
          payload: {
            screenName: Screens.CABLING_TYPE,
            value: "underground"
          }
        });

        dispatch({
          type: Actions.CHANGE_SCREEN,
          payload: {
            nextScreen: Screens.FUSEBOX
          }
        });
      }
    },
    {
      text: "overhead",
      icon: "cables_underground.jpg",
      handler: function () {
        dispatch({
          type: Actions.SET_OPTIONS,
          payload: {
            screenName: Screens.CABLING_TYPE,
            value: "overhead"
          }
        });
        dispatch({
          type: Actions.CHANGE_SCREEN,
          payload: {
            nextScreen: Screens.FUSEBOX
          }
        });
      }
    }
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        What kind of <span className={common.highlight}> cabling </span> you
        want ?
      </h2>
      <h4 className={common.instruction}>Pick appropriate options</h4>
      <Options options={options} />
    </div>
  );
}

export default CablingType;
