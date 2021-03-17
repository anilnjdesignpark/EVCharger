import React from "react";
import { CarData, Screens } from "../reducers/funnel";

const Charger = ({ charger, state, dispatch }) => {
  const { name, basePrice } = charger;
  const { brand, model } = state.selectedOptions[Screens.CAR_SELECT].value;

  function isEligible() {
    const _brand = CarData.filter((car) => car.name === brand)[0];
    return _brand.supported.includes(model);
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>base price {basePrice}</h2>
    </div>
  );
};

export default Charger;
