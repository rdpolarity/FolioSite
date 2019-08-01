import React from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import Title from "./Title";
import websitesData from "../data/WebsiteData.json";
import artworksData from "../data/ArtworkData.json";
import ProjectsContainer from "./ProjectContainer";
import { makeStyles } from "@material-ui/styles";
import Particles from "react-particles-js";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    margin: 25,
    padding: "0 30px"
  }
});

const particles = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      }
    },
    modes: {
      bubble: {
        size: 5
      }
    }
  }
};

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Particles
        width={"98vw"}
        height={800}
        params={particles}
        className="particles"
      />
      <section id="splash" style={{ height: 800 }}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Typography className="title" variant="h1">
            Aydie.Me
          </Typography>
          <Typography variant="p">Full Stack Developer</Typography>
          <Grid container justify="center" style={{ margin: 5 }}>
            <IconButton href="https://github.com/rdpolarity" target="_blank">
              <FIcon color="white" icon={["fab", "github"]} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/aiden-mellor-336a2016b/"
              target="_blank"
            >
              <FIcon color="white" icon={["fab", "linkedin"]} />
            </IconButton>
          </Grid>
          <Button className={classes.root}>Resume</Button>
        </Grid>
      </section>
      <section id="websites">
        <Title>Websites</Title>
        <ProjectsContainer data={websitesData} />
      </section>
      <section id="artworks">
        <Title>Artworks</Title>
        <ProjectsContainer data={artworksData} />
      </section>
    </div>
  );
}
