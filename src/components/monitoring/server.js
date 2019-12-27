import React, { Fragment } from "react";

export default function Server(props) {

  const style = {
    width: props.disabled ? "100%" : props.progress
  };

  const bar = (
    props.disabled ? "progress-bar progress-bar-striped bg-warning" : "progress-bar progress-bar-striped bg-success"
  )

  return (
    <Fragment>
      <div className="clearfix">
        <h5 className="card-title float-left">{props.name}</h5>
        <p className="card-title float-right">{props.online}</p>
      </div>
      <div className="progress mb-3">
        <div
          className={bar}
          role="progressbar"
          style={style}
          // aria-valuenow="45"
          // aria-valuemin="0"
          // aria-valuemax="100"
        ></div>
      </div>
    </Fragment>
  );
}
