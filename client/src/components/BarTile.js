import React from "react";
import { Link } from "react-router-dom";

const BarTile = (props) => {
  return (
    <div className="callout">
      <h1>
        <Link to={`/bars/${props.id}`}> {props.name} </Link>
      </h1>
      <h3>Address: {props.address} </h3>
      <h3>Hours of Operation: {props.hoursOfOperation} </h3>
      <h3>Cover Charge: {props.coverCharge} </h3>
    </div>
  );
};

export default BarTile;
