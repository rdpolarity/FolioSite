import React from 'react';
import {Container, Paper, Grid} from '@material-ui/core'
import Title from '../components/Title';
import ProjectBox from '../components/ProjectBox';

const websitesData = [
{
  title: "Coinrizon",
  chips: ["HTML","CSS","Javascript","ReactJS","Material UI"],
  link: "https://coinrizon.web.app",
  github: "https://github.com/rdpolarity/Coinrizon"
},
{
  title: "FolioSite",
  chips: ["HTML","CSS","Javascript","ReactJS","Material UI","SASS"],
  link: "https://aydie.me"
}
]

const loadProjectDOMS = () => {
  let websites = []
  websitesData.forEach(website => {
    websites.push(
      <ProjectBox link={website.link} github={website.github} title={website.title} chips={website.chips}/>
    )
  })
  return websites
}

function App() {
  return (
    <Container>
      <Title>Aydie Me</Title>
      <Paper style={{padding: 50}}>
        <Title>Websites</Title>
        <Grid container justify="space-evenly">
          {loadProjectDOMS()}
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
