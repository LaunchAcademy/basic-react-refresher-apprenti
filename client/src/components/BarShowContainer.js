import React, { useState, useEffect } from "react";

const BarShowContainer = (props) => {
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    coverCharge: null,
    hoursOfOperation: "",
    reviews: [],
  });

  const fetchBar = async () => {
    // debugger
    const barId = props.match.params.id;
    try {
      const response = await fetch(`/api/v1/bars/${barId}`);
      // debugger 
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const barData = await response.json();
      // debugger 
      setBarRecord(barData.bar);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchBar();
  },[]);

  return (
    <div className="bars-container">
      <h1> Bar Show Page !</h1>
      <h2>{barRecord.name}</h2>
      <p>Location: {barRecord.address}</p>
      <p>Cover Charge: {barRecord.coverCharge}</p>
      <p>Hours: {barRecord.hoursOfOperation}</p>
    </div>
  );
};

export default BarShowContainer;
