import React from "react";
import { Link } from "react-router-dom";

const Try = () => {
  const handlepay1 = () => {
    console.log("paynowww");
  };
  return (
    <div>
      <button onClick={() => handlepay1()}>Paynow</button>
    </div>
  );
};

export default Try;
