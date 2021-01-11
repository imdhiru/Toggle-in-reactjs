import React from "react";
import Material from "@material-ui/core";

export default function Test(props) {
  return (
    <div className={props.tabo.show.toString()} taro={props.tabo.name}>
      hi test app {props.tabo.name}
    </div>
  );
}
