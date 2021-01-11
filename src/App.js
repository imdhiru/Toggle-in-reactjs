import React, { useState } from "react";
import "./styles.css";
import Test from "./test";

export default function App() {
  const [ab, defa] = useState({ name: "Sudhir Kumar", show: false });
  console.log(ab);
  const update = () => {
    defa((ab) => {
      console.log("after click", ab);
      return { ...ab, name: "Rudra Kumar", show: !ab.show };
    });
  };
  return (
    <div className="App">
      <h1>Hello Bloginstall</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={update}>click</button>
      <Test tabo={ab} />
    </div>
  );
}
