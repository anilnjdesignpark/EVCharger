import React from "react";
import Options from "../components/Options";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";

function PurchaseLease({ state, dispatch }) {
  const options = [
    {
      text: "yes",
      icon: "yes.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.PURCHASE_LEASE,
              value: "yes",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.OFFSTREET_PARKING,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 20,
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
              screenName: Screens.PURCHASE_LEASE,
              value: "no",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.OFFSTREET_PARKING,
            },
          },
          {
            type: Actions.SET_PROGRESS,
            payload: {
              progress: 20,
            },
          },
        ]);
      },
    },
    {
      text: "have'nt bought it yet",
      icon: "question.png",
      handler: function () {
        dispatch([
          {
            type: Actions.SET_OPTIONS,
            payload: {
              screenName: Screens.PURCHASE_LEASE,
              value: "have'nt bought it yet",
            },
          },
          {
            type: Actions.CHANGE_SCREEN,
            payload: {
              nextScreen: Screens.OFFSTREET_PARKING,
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
  ];

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Did you purchase or start leasing your vehicle after
        <span className={common.highlight}> 1st October 2016 </span>
      </h2>
      <h4 className={common.instruction}>
        You need to have purchased or started leasing the vehicle after this
        date to be eligible for the &nbsp;
        <a href="xyz.com" className={common.link}>
          OLEV
        </a>
        &nbsp; grant
      </h4>
      <Options options={options} />
    </div>
  );
}

export default PurchaseLease;
