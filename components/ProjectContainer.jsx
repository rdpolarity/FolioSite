import React from "react";
import { Grid } from "@material-ui/core";
import ProjectBox from "./ProjectBox";

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "key8EiQHgKFAlSthH"
});
var base = Airtable.base("apptdlPaYAkJy1qfx");

const ProjectsContainer = props => {
  return (
    <Grid container justify="center">
      {loadProjectDOMS(props.data)}
    </Grid>
  );
};

const loadProjectDOMS = JObject => {
  let boxs = [];
  base("Projects")
    .select({ maxRecords: 3, view: "Grid view" })
    .eachPage(projects => {
      projects.forEach(project => {
        let data = project.fields;
        boxs.push(
          <ProjectBox
            display={data.isWebsite}
            img={data.Thumbnail}
            mobile={data.Mobile}
            link={data.Link}
            github={data.Github}
            title={data.Name}
            chips={data.Tags}
          />
        );
      });
    });

  // JObject.forEach(data => {
  //   boxs.push(
  //     <ProjectBox
  //       display={data.display}
  //       img={data.img}
  //       mobile={data.mobile}
  //       link={data.link}
  //       github={data.github}
  //       title={data.title}
  //       chips={data.chips}
  //     />
  //   );
  // });
  return boxs;
};

export default ProjectsContainer;
