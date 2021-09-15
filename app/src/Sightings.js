import * as React from "react";

import "./styles.module.scss";
import * as apiClient from "./apiClient";

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

const SightingList = ({ sightings }) => (
  <section>
    <h2>List of Sightings</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Time Seen</th>
          <th>Individual ID</th>
          <th>Nickname</th>
          <th>Species</th>
          <th>Location Seen</th>
          <th>Healthy</th>
          <th>Sighter Email</th>
          <th>Record Creation Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {sightings.map(
          ({
            id,
            time_seen,
            individual_id,
            nickname,
            name,
            location,
            healthy,
            sighter_email,
            created_at,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{time_seen}</td>
              <td>{individual_id}</td>
              <td>{nickname}</td>
              <td>{name}</td>
              <td>{location}</td>
              <td>{healthy ? "Yes" : "No"}</td>
              <td>{sighter_email}</td>
              <td>{created_at}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </section>
);

const AddSighting = ({ addSighting }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      time_seen: { value: time_seen },
      individual_id: { value: individual_id },
      location: { value: location },
      healthy: { value: healthy },
      sighter_email: { value: sighter_email },
    } = form.elements;

    e.preventDefault();
    addSighting({
      time_seen,
      individual_id,
      location,
      healthy,
      sighter_email,
    });
    form.reset();
  };

  const [individuals, setIndividuals] = React.useState([]);

  const loadIndividuals = async () => {
    setIndividuals(await apiClient.getIndividuals());
  };

  React.useEffect(() => {
    loadIndividuals();
  }, []);

  const individualList = individuals.map((individual) => (
    <option key={individual.id} value={individual.id}>
      {individual.id}
    </option>
  ));

  return (
    <>
      <h2>Add a New Sighting</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="time_seen">Time seen: </label>
        <input
          id="time_seen"
          name="time_seen"
          placeholder="1990-01-01 12:00:00"
          required
        />
        <label htmlFor="individual_id">Individual ID: </label>
        <select id="individual_id" name="individual_id" required>
          {individualList}
        </select>
        <label htmlFor="location">Location: </label>
        <input id="location" name="location" required />
        <label htmlFor="healthy">Healthy: </label>
        <select id="healthy" name="healthy">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label htmlFor="email">Sighter email: </label>
        <input id="email" type="email" name="sighter_email" />
        {/* <label htmlFor="created_at">Record creation timestamp: </label>
        <input
          id="created_at"
          name="created_at"
          placeholder="1990-01-01 12:00:00"
        /> */}
        <button>Add sighting</button>
      </form>
    </>
  );
};

export default Sightings;
