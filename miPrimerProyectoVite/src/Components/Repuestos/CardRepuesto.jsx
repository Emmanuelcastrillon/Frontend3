import React from "react";

const Card = ({ partNumber, description }) => {
  return (
    <div>
      <h2>Repuesto:</h2>
      <p>#Parte: {partNumber}</p>
      <p>Descripción: {description}</p>
    </div>
  );
};

export default Card;
