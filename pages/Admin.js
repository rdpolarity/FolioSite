import React from "react";
import { TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const columns = [
  "project",
  "title",
  "chips",
  "link",
  "img",
  "mobile",
  "github"
];

const getDataJson = url => {
  return fetch(`http://${url}`)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
};

console.log(getDataJson("localhost:5000/projects"));

export default function Admin() {
  const data = [];
  const options = {
    filterType: "checkbox",
    serverSide: true
  };
  return (
    <div>
      <MUIDataTable
        title={"Projects"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

// const data = [
//   {
//     project: "Websites",
//     title: "Coinrizon",
//     chips: ["HTML", "CSS", "Javascript", "ReactJS", "Material UI"],
//     link: "https://coinrizon.web.app",
//     img: "images/coinrizon-desktop.png",
//     mobile: "images/coinrizon-mobile.png",
//     github: "https://github.com/rdpolarity/Coinrizon"
//   }
// ];

// const TInput = props => {
//   return (
//     <TextField
//       style={{}}
//       id={props.id}
//       required={props.r}
//       label={props.label}
//       placeholder={props.label}
//       margin="normal"
//       variant="outlined"
//     />
//   );
// };

/* <Grid container direction="column">
  <TInput id="title" label="Project Title" r />
  <TInput id="link" label="Website Link" />
  <TInput id="img" label="Thumbnail" r />
  <TInput id="mobile" label="Mobile Thumbnail" />
  <TInput id="github" label="Github Project" />
</Grid> */
