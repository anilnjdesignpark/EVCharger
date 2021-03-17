import React from "react";
import { Actions, Screens, CarData, IMAGES_URl } from "../reducers/funnel";
import common from "./Common.module.css";
import style from "./SelectCar.module.css";

function SelectCar({ state, dispatch }) {
  const { brand: activeBrand, model: activeModel } = state.selectedOptions[
    Screens.CAR_SELECT
  ].value;

  const eligible = isEligible();

  function getCarIcon() {
    return (
      CarData.filter((car) => car.name === activeBrand)[0].icon ||
      "vehicle-default.png"
    );
  }

  function isEligible() {
    const brand = CarData.filter((car) => car.name === activeBrand)[0];
    return brand.supported.includes(activeModel);
  }

  function getCarBrands() {
    return CarData.map((car) => car.name);
  }

  function getModels() {
    const brand = CarData.filter((car) => car.name === activeBrand)[0];
    return brand.supported.concat(brand.unSupported).sort();
  }

  function handleBrandChange(e) {
    dispatch({
      type: Actions.SET_OPTIONS,
      payload: {
        screenName: Screens.CAR_SELECT,
        value: {
          brand: e.target.value,
          model: CarData.filter((car) => car.name === e.target.value)[0]
            .supported[0],
        },
      },
    });
  }

  function handleModelChange(e) {
    dispatch({
      type: Actions.SET_OPTIONS,
      payload: {
        screenName: Screens.CAR_SELECT,
        value: {
          brand: activeBrand,
          model: e.target.value,
        },
      },
    });
  }

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Which <span className={common.highlight}>vehicle</span> is the charger
        for ?
      </h2>
      <h4 className={common.instruction}>
        Don’t worry, our chargers work with all electric vehicles. This is just
        so we can work out if you are eligible for the grant.
      </h4>

      <div className={style.card}>
        <div className={style.details}>
          <div>
            <select
              className={style.select}
              onChange={handleBrandChange}
              value={activeBrand}
            >
              {getCarBrands().map((brand) => (
                <option key={brand} defaultValue={brand} onSelect={alert}>
                  {brand}
                </option>
              ))}
            </select>
            <select
              className={style.select}
              onChange={handleModelChange}
              value={activeModel}
            >
              {getModels().map((model) => (
                <option key={model} defaultValue={model} onSelect={alert}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <img
            className={style.icon}
            src={`${IMAGES_URl}/${getCarIcon()}`}
            alt="carIcon"
          />
        </div>
        {eligible ? (
          <div className={style.eligible}>
            This car is eligible for the OLEV grant
          </div>
        ) : (
          <div className={style.notEligible}>
            Unfortunately this car isn’t eligible for the OLEV grant, but you
            can still buy your charger at the normal price
          </div>
        )}
        <button
          className={style.button}
          disabled={!(activeBrand && activeModel)}
          onClick={(e) => {
            dispatch([
              {
                type: Actions.SET_OPTIONS,
                payload: {
                  screenName: Screens.CAR_SELECT,
                  value: {
                    brand: "audi",
                    model: activeModel,
                  },
                },
              },
              {
                type: Actions.CHANGE_SCREEN,
                payload: {
                  nextScreen: Screens.PURCHASE_LEASE,
                },
              },
              {
                type: Actions.SET_PROGRESS,
                payload: {
                  progress: 20,
                },
              },
            ]);
          }}
        >
          continue
        </button>
      </div>
    </div>
  );
}

export default SelectCar;
