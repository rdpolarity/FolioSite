import React from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import Title from "./Title";
import { makeStyles } from "@material-ui/styles";
import Particles from "react-particles-js";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Async from "react-async";
import ProjectBox from "./ProjectBox";
library.add(fab);

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
var base = Airtable.base("apptdlPaYAkJy1qfx");
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    margin: 25,
    padding: "0 30px",
    marginTop: "30px;",
  },
});

const particles = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        size: 5,
      },
    },
  },
};

const dataFetch = () => {
  return base("Projects").select({ view: "Grid view" }).firstPage();
};

const boolValidate = (stringBool) => {
  return stringBool == "true" ? true : false;
};

const ProjectList = () => {
  return (
    <Grid container justify="center">
      <Grid container justify="center" style={{ maxWidth: "1100px" }}>
        <Async promiseFn={dataFetch}>
          <Async.Pending>
            <CircularProgress />
          </Async.Pending>
          <Async.Rejected>
            {(error) => `Something went wrong: ${error.message}`}
          </Async.Rejected>
          <Async.Fulfilled>
            {(data) => {
              return data.map((projects) => {
                let project = projects.fields;
                return (
                  <ProjectBox
                    key={Math.random()}
                    display={!boolValidate(project.isWebsite)}
                    img={project.Thumbnail}
                    mobile={project.Mobile}
                    link={project.Link}
                    github={project.Github}
                    title={project.Name}
                    chips={project.Tags}
                  />
                );
              });
            }}
          </Async.Fulfilled>
        </Async>
      </Grid>
    </Grid>
  );
};

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Particles
        width={"100vw"}
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
          <Typography className="title" variant="h2">
            <strong>AIDEN MELLOR</strong>
          </Typography>
          <Typography variant="subtitle2" className="sub">
            Multi-Skilled Computer Scientist
          </Typography>
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
          <Button className={classes.root} href="./static/folio.pdf">
            Resume
          </Button>
        </Grid>
      </section>
      <section id="projects">
        <ProjectList />
      </section>
    </div>
  );
}
