import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "globals/css/variables/index.css";
import "globals/css/index.global.css";


ReactDOM.render(<App/>, document.getElementById("root"));

serviceWorker.unregister();
