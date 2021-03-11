import React, { useState, useEffect } from "react";
import BarTile from "./BarTile";
import BarForm from "./BarForm";

const BarsIndexContainer = (props) => {
  const [bars, setBars] = useState([]);

  const fetchBars = async () => {
    try {
      const response = await fetch("/api/v1/bars");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const barData = await response.json();
      setBars(barData);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchBars();
  }, []);

  const addNewBar = async (barPayload) => {
    try {
      const response = await fetch("/api/v1/bars", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(barPayload),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      //debugger 
      const currentBars = bars;
      setBars(currentBars.concat(responseBody.bar));
    } catch (err) {
      console.error(`Something went wrong in fetch! ${err}`);
    }
  };

  const barTiles = bars.map((bar) => {
    return (
      <BarTile
        key={bar.id}
        id={bar.id}
        name={bar.name}
        address={bar.address}
        hoursOfOperation={bar.hoursOfOperation}
        coverCharge={bar.coverCharge}
      />
    );
  }); 

  return (
    <div className="bars-container">
      <h2> I am the Bars Index Container </h2>
      <BarForm addNewBar={addNewBar} />
      {barTiles}
    </div>
  );
};

export default BarsIndexContainer;
