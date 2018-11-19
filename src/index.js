import React from "react";
import ReactDOM from "react-dom";
import { Log, VisualizerProvider } from "react-lifecycle-visualizer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import commit from "./images/commit.png";

ReactDOM.render(
  <VisualizerProvider>
    <div style={{ display: "flex",  position: "relative" }}>
      <App />
      <Log />
      <div className="commit-logo">
        <img alt="Commit Logo" src={commit} />
      </div>
    </div>
  </VisualizerProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
