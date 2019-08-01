import React from "react";
import { Container, Paper, Grid } from "@material-ui/core";
import Title from "./components/Title";
import websitesData from "./data/WebsiteData.json";
import artworksData from "./data/ArtworkData.json";
import NavBar from "./components/NavBar";
import ProjectsContainer from "./components/ProjectData";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <section style={{ marginTop: 100 }} id="websites">
          <ProjectsContainer data={websitesData} />
        </section>
        <section id="artworks">
          <ProjectsContainer data={artworksData} />
        </section>
      </Container>
    </div>
  );
}
