import React from "react";
import { Typography } from "@material-ui/core";

export default function Title(props) {
  return (
    <Typography
      variant="h3"
      gutterBottom
      style={{ textAlign: "center", margin: "50px 50px", color: "white" }}
    >
      {props.children}
    </Typography>
  );
}
