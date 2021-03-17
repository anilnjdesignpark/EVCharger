import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Funnel from "./components/Funnel";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Funnel />
  </StrictMode>,
  rootElement
);
