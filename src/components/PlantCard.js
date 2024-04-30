import React, { useState } from "react";

function PlantCard({ plant, handelDelete, removePlant }) {

  const { id, name, image, price } = plant
  const [isStocked, setStocked] = useState(true)
  const [updatedPrice, setPrice] = useState(price)

  function handlePlantStock() {
    setStocked((isStocked) => !isStocked);
  }

  function setNewPrice(e) {
    setPrice(e.target.value)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "price": e.target.value
      })
    })
  }

  function handelDelete(e) {
    console.log(e)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => removePlant(plant))
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <input
        type="text"
        id="price"
        value={updatedPrice}
        onChange={(e) => setNewPrice(e)}></input>
      {isStocked ? (
        <button className="primary" onClick={() => handlePlantStock()}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={(e) => handelDelete(e)}>X</button>
    </li>
  );
}

export default PlantCard;

