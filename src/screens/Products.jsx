import React from "react";
import Charger from "../components/Charger";
import { CarData, ChargerData, Screens } from "../reducers/funnel";

const Products = ({ state, dispatch }) => {
  const { brand, model } = state.selectedOptions[Screens.CAR_SELECT].value;

  return (
    <div>
      <h1>Showing chargers for {brand}</h1>
      {ChargerData.map((charger) => (
        <Charger key={charger.id} charger={charger} state={state} />
      ))}
    </div>
  );
};

export default Products;
