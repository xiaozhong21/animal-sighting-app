import * as React from "react";

import * as apiClient from "../apiClient";

import AddSighting from "./AddSighting";
import SightingList from "./SightingList";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);
  const [individuals, setIndividuals] = React.useState([]);

  const loadSightings = async () =>
    setSightings(await apiClient.getSightings());
  const addSighting = async (sighting) => {
    await apiClient.addSighting(sighting);
    loadSightings();
  };

  React.useEffect(() => {
    loadSightings();
  }, []);

  const loadIndividuals = async () => {
    setIndividuals(await apiClient.getIndividuals());
  };

  React.useEffect(() => {
    loadIndividuals();
  }, []);

  return (
    <section>
      <SightingList {...{ sightings, individuals }} />
      <AddSighting {...{ addSighting, individuals }} />
    </section>
  );
};

export default Sightings;
