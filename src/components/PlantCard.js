import React, { useState } from "react";

function PlantCard({ plant }) {

  const { id, name, image, price } = plant
  const [isStocked, setStocked] = useState(true)

  function handlePlantStock() {
   setStocked((isStocked) => !isStocked);
  }

    return (
      <li className="card" data-testid={id}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {isStocked ? (
          <button className="primary" onClick={() => handlePlantStock()}>In Stock</button>
        ) : (
          <button>Out of Stock</button>
        )}
      </li>
    );
  }

export default PlantCard;
