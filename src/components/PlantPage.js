import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json()
      .then((data) => setPlants(data)))
}, [])

  return (
    <main>
      <NewPlantForm 
      plants={plants} 
      setPlants={setPlants}
      />
      <Search 
      plants={plants} 
      search={search} 
      setSearch={setSearch}
      />
      <PlantList 
      plants={plants}
      search={search} 
      setSearch={setSearch}
      />
    </main>
  );
}

export default PlantPage;
