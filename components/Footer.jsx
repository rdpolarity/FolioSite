import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Footer() {
  return (
    <div style={{ height: 100, color: "white" }}>
      <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: "100%" }}
      >
        <Typography varient="p">Copyright 2019 ©</Typography>
      </Grid>
    </div>
  );
}
