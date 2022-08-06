import React from "react";
import * as ReactDOMClient from "react-dom/client";
//import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
