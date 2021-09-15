import * as React from "react";

import * as apiClient from "../apiClient";

import AddSighting from "./AddSighting";
import SightingList from "./SightingList";
import "../styles.module.scss";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);

  const loadSightings = async () =>
    setSightings(await apiClient.getSightings());
  const addSighting = async (sighting) => {
    await apiClient.addSighting(sighting);
    loadSightings();
  };

  React.useEffect(() => {
    loadSightings();
  }, []);

  return (
    <section>
      <SightingList {...{ sightings }} />
      <AddSighting {...{ addSighting }} />
    </section>
  );
};

export default Sightings;
