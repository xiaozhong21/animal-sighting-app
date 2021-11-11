import * as React from "react";

import Sightings from "./components/Sightings";
import "./styles.module.scss";

const App = () => {
  return (
    <main>
      <h1>Animal Sighting Tracker</h1>
      <Sightings />
    </main>
  );
};

export default App;
