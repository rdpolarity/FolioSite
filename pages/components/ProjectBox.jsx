import React from "react";
import { Grid, Paper, Chip, Typography, IconButton } from "@material-ui/core";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";
import Thumbnail from "./Thumbnail";
import TermLibrary from "../data/TermLibrary.json";
library.add(fab, fas);

export default function ProjectBox(props) {
  const LoadChips = () => {
    let chips = [];
    props.chips.forEach(chip => {
      let lchip = chip.toLowerCase();
      let icon = TermLibrary[lchip] ? TermLibrary[lchip] : lchip;
      chips.push(
        <Chip
          style={{ margin: 2 }}
          icon={<FIcon icon={["fab", icon]} />}
          label={chip}
        />
      );
    });
    return chips;
  };

  const isGithub = () => {
    if (props.github) {
      return (
        <IconButton style={{ padding: 6 }} href={props.github}>
          <FIcon icon={["fab", "github"]} />
        </IconButton>
      );
    }
  };

  const isLink = () => {
    if (props.link) {
      return (
        <IconButton style={{ padding: 6 }} href={props.link}>
          <FIcon icon="link" />
        </IconButton>
      );
    }
  };
  return (
    <Grid href={props.link} item style={{ width: 250, margin: 10 }}>
      <Tilt options={{ max: 15, scale: 1.05 }}>
        <Paper elevation={1} className="scroll" elevation={20}>
          <div className="titleBox">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography varient="p">{props.title}</Typography>
              </Grid>
              <Grid item>
                {isGithub()}
                {isLink()}
              </Grid>
            </Grid>
          </div>
          <Thumbnail img={props.img}>
            <Grid
              style={{ height: "100%", padding: 10 }}
              container
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                {props.mobile ? <Thumbnail img={props.mobile} mobile /> : null}
              </Grid>
            </Grid>
          </Thumbnail>
          <Grid container style={{ padding: 5 }}>
            {LoadChips(props.img, props.link)}
          </Grid>
        </Paper>
      </Tilt>
    </Grid>
  );
}
