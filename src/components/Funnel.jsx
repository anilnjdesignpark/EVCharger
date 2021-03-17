import React, { useEffect, useReducer, useState } from "react";
import funnel, { Actions, initialState, Screens } from "../reducers/funnel";
import BookCallBack from "../screens/BookCallback";
import CablingType from "../screens/CablingType";
import ChargerInstall from "../screens/ChargerInstall";
import Fusebox from "../screens/Fusebox";
import HaveVehicle from "../screens/HaveVehicle";
import OffStreetParking from "../screens/OffStreetParking";
import PostCode from "../screens/PostCode";
import PurchaseLease from "../screens/PurchaseLease";
import SelectCar from "../screens/SelectCar";
import ProgressBar from "./ProgressBar";
import style from "./Funnel.module.css";
import InstantQuote from "../screens/InstantQuote";
import Start from "../screens/Start";
import Products from "../screens/Products";

function useUndo(reducer) {
  const { state: _state, history: _history } = readFromSessionStorage();

  const [state, dispatch] = useReducer(reducer, _state);
  const [history, setHistory] = useState(_history);

  useEffect(() => {
    sessionStorage.setItem("STATE", JSON.stringify(state));
    sessionStorage.setItem("HISTORY", JSON.stringify(history));
  }, [state, history]);

  function _dispatch(action) {
    setHistory((history) => history.concat(reducer(state, action)));
    dispatch(action);

    if (action instanceof Array) {
      action.forEach(dispatch);
    } else {
      dispatch(action);
    }
  }

  function clear() {
    sessionStorage.clear();
    dispatch({
      type: Actions.RESET,
    });
    setHistory([initialState]);
  }

  function undo() {
    if (history.length > 1) {
      const newHistory = history.slice(0, history.length - 1);
      setHistory(newHistory);
      dispatch({
        type: "SET_STATE",
        payload: {
          state: newHistory[newHistory.length - 1],
        },
      });
    }
  }

  return {
    state,
    dispatch: _dispatch,
    undo,
    canUndo: history.length > 2,
    history,
    setHistory,
    clear,
  };
}

function readFromSessionStorage() {
  const state = sessionStorage.getItem("STATE");
  const history = sessionStorage.getItem("HISTORY");

  if (state && history) {
    return { state: JSON.parse(state), history: JSON.parse(history) };
  } else {
    return {
      state: initialState,
      history: [],
    };
  }
}

function Funnel() {
  const { state, dispatch, undo, clear } = useUndo(funnel);

  function buildScreens() {
    switch (state.currentScreen) {
      case Screens.START:
        return <Start state={state} dispatch={dispatch} />;

      case Screens.CAR_SELECT:
        return <SelectCar state={state} dispatch={dispatch} />;

      case Screens.PURCHASE_LEASE:
        return <PurchaseLease state={state} dispatch={dispatch} />;

      case Screens.OFFSTREET_PARKING:
        return <OffStreetParking state={state} dispatch={dispatch} />;

      case Screens.BOOK_CALLBACK:
        return (
          <BookCallBack
            state={state}
            dispatch={dispatch}
            onSuccess={(e) => {
              clear();
            }}
          />
        );

      case Screens.HAVE_VEHICLE:
        return <HaveVehicle state={state} dispatch={dispatch} />;

      case Screens.CHARGER_INSTALL:
        return <ChargerInstall state={state} dispatch={dispatch} />;

      case Screens.POSTCODE:
        return <PostCode state={state} dispatch={dispatch} />;

      case Screens.FUSEBOX:
        return <Fusebox state={state} dispatch={dispatch} />;

      case Screens.CABLING_TYPE:
        return <CablingType state={state} dispatch={dispatch} />;

      case Screens.INSTANT_QUOTE:
        return (
          <InstantQuote
            state={state}
            dispatch={dispatch}
            onSuccess={(e) => {
              clear();
            }}
          />
        );

      case Screens.PRODUCTS:
        return <Products state={state} dispatch={dispatch} />;

      default:
        return <h1>Ops</h1>;
    }
  }

  return (
    <div className={style.container}>
      <ProgressBar value={state.progress + "%"} />
      {buildScreens()}
      {![Screens.CAR_SELECT, Screens.START].includes(state.currentScreen) && (
        <nav className={style.prev} onClick={undo}>
          <button className={style.button}>
            <img
              src="images/left-chevron.svg"
              alt="backIcon"
              className={style.icon}
            />
            <span className={style.text}>back</span>
          </button>
        </nav>
      )}
      {/* <pre>{JSON.stringify(state, null, 20)}</pre> */}
    </div>
  );
}

export default Funnel;
