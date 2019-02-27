import React from "react";
import "./style.css";

function Title(props) {
  return (<h3 className="title">{props.children} <h6>Score: {props.score}</h6>    <h6>Top Score: {props.topScore}</h6> <h6>{props.info} </h6></h3>
   
  );
}

export default Title;
