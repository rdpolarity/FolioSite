import React from "react";

export default function Thumbnail(props) {
  let style = {
    backgroundImage: `url(${props.img})`
  };
  let classes = "thumbnail";
  if (props.mobile) classes = "mobileThumbnail";
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  );
}
