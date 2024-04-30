import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, setPlants }) {

  const filtering = plants.filter((matchingPlant) => {
    return matchingPlant.name.toLowerCase().includes(search.toLowerCase())
  })

  const plant = filtering.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} setPlants={setPlants} removePlant={removePlant} />
  })

  function removePlant(plant) {
    const newPlantList = [...plants]
    const index = newPlantList.indexOf(plant);
    if (index > -1) {
      newPlantList.splice(index, 1);
      setPlants(newPlantList)
    }
  }

  return (
    <ul className="cards">{plant}</ul>
  );
}

export default PlantList;
