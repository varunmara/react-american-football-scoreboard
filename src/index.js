import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Scorecard() {
  let score = 0;
  const [goal, SetGoal] = useState(0);
  const [fieldGoal, setFieldGoal] = useState(0);

  const incPoints = e => {
    SetGoal(goal + 3);
  };

  return (
    <div>
      Score = {score}
      <button onClick={incPoints}>goal</button>
      <button onClick={incPoints}> field goal</button>
    </div>
  );
}
