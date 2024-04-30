import React, { useState } from "react";

function NewPlantForm({ handleFormSubmit, plants, setPlants }) {

  const [plantPrice, setPrice] = useState(0);
  const [plantName, setName] = useState("");
  const [plantImage, setImage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e)

    const newPlant = {
      "name": plantName,
      "image": plantImage,
      "price": plantPrice
    }
console.log(newPlant)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((resp) => resp.json())
      .then(() => setPlants([...plants, newPlant]))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
