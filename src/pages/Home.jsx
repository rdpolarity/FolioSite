import React from 'react';
import {Container, Paper, Grid} from '@material-ui/core'
import Title from '../components/Title';
import ProjectBox from '../components/ProjectBox';
import websitesData from "../Data/WebsiteData.json"
import artworksData from "../Data/ArtworkData.json"
import NavBar from '../components/NavBar';

const ProjectsContainer = (props) => {
  return (
    <Grid container justify="space-evenly">
    {loadProjectDOMS(props.data)}
    </Grid>
  )
}

const loadProjectDOMS = (JObject) => {
  let boxs = []
  JObject.forEach(data => {
    boxs.push(
      <ProjectBox img={data.img} mobile={data.mobile} link={data.link} github={data.github} title={data.title} chips={data.chips}/>
    )
  })
  return boxs
}

function App() {
  return (
    <div>
    <NavBar/>
    <Container>
      <section style={{marginTop: 100}} id="websites">
        <Paper className="section">
          <Title>Websites</Title>
          <ProjectsContainer data={websitesData}/>
        </Paper>
      </section>
      <section id="artworks">
        <Paper className="section" id="artworks">
          <Title>Artworks</Title>
          <ProjectsContainer data={artworksData}/>
        </Paper>
      </section>
    </Container>
    </div>
  );
}

export default App;
