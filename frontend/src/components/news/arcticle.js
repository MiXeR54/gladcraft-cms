import React from "react";

export default function Aricle(props) {
  return (
    <div className="card mb-3">
      <div className="card-header clearfix">
          <h5 className="text float-left m-auto">{props.title}</h5>
          <small className="text-muted float-right m-auto">{props.date}</small>
      </div>
      <div className="card-body">
        <p className="card-title">{props.content}</p>
        <p className="card-text">
        </p>
      </div>
    </div>
  );
}
