import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

// import "../pages/index.css"
import NavButton from "./NavButton";

export default function NavBar(props) {
  return (
    <div>
      <AppBar color="white">
        <Container>
          <Toolbar>
            {/* <img src={logo} alt="logo" style={{width: 30}}/> */}
            <Typography variant="button">AYDIEME</Typography>
            <Grid container spacing={1} alignItems="center" justify="flex-end">
              <NavButton name="websites" />
              <NavButton name="artworks" />
              <NavButton name="resume" variant="outlined" />
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
