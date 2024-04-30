import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

const filtering = plants.filter((matchingPlant) => {
  return matchingPlant.name.toLowerCase().includes(search.toLowerCase())
})

const plant = filtering.map((plant) => {
  return <PlantCard  key={plant.id} plant={plant}/>
})


  return (
    <ul className="cards">{plant}</ul>
  );
}

export default PlantList;
