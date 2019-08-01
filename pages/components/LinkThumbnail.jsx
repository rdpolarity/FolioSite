import React from "react";
import { Grid, CircularProgress, Icon } from "@material-ui/core";
import Async from "react-async";
import mql from "@microlink/mql";

const getScreenshot = (url, mobile) => {
  let properties = {
    screenshot: true,
    fullPage: true,
    type: "jpeg"
  };
  if (mobile) properties.screenshot = "iPhone X";
  return mql(url, properties);
};

export default function Thumbnail(props) {
  return (
    <Async promise={getScreenshot(props.link, props.mobile)}>
      <Async.Loading>
        <div className="imageSpacer">
          <Grid
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
            container
          >
            <CircularProgress className="circle" />
          </Grid>
        </div>
      </Async.Loading>
      <Async.Fulfilled>
        {res => {
          console.log(res.data.screenshot.url);
          let style = {
            backgroundImage: `url(${res.data.screenshot.url})`
          };
          if (props.mobile) {
            style.height = "100%";
          }
          return (
            <div style={style} className="thumbnail">
              {props.children}
            </div>
          );
        }}
      </Async.Fulfilled>
      <Async.Rejected>
        <div className="imageSpacer">
          <Grid
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
            container
          >
            <Icon fontSize="large">error</Icon>
          </Grid>
        </div>
      </Async.Rejected>
    </Async>
  );
}
