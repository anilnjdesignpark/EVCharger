import React from "react";
import { Actions, Screens } from "../reducers/funnel";

const Start = ({ state, dispatch }) => {
  return (
    <div>
      <h1>Start</h1>
      <button
        onClick={(e) => {
          dispatch({
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.CAR_SELECT,
            },
          });
        }}
      >
        continue
      </button>
    </div>
  );
};

export default Start;
