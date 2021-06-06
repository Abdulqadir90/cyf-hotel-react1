import React from "react";

const RestaurantButton = ({ orderAdder }) => {
  return (
    <button className="btn btn-dark btn-sm" onClick={orderAdder}>
      Add
    </button>
  );
};

export default RestaurantButton;
