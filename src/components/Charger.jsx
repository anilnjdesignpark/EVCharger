import React from "react";
import { CarData, Charges, Screens } from "../reducers/funnel";
import style from "./Charger.module.css";

const Charger = ({ charger, state, dispatch }) => {
  const { name, basePrice } = charger;
  const { brand, model } = state.selectedOptions[Screens.CAR_SELECT].value;
  const fusebox = state.selectedOptions[Screens.FUSEBOX].value;
  const olevGranted = isEligible();

  function isEligible() {
    const _brand = CarData.filter((car) => car.name === brand)[0];
    return _brand.supported.includes(model);
  }

  function getTotalPrice() {
    let total = basePrice;
    if (!olevGranted) {
      total += Charges.olevGrant;
    }

    total += Charges.increments[fusebox];
    console.log(fusebox);

    return total;
  }

  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <h2>base price {basePrice}</h2>
      <h2>OLEV granted {olevGranted ? "yes" : "no"}</h2>
      <h2>Distance {fusebox}</h2>

      <h2>Total price {getTotalPrice()}</h2>

      <button>buy</button>
      <hr />
    </div>
  );
};

export default Charger;
