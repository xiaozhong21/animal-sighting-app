import React from "react";

import * as apiClient from "../apiClient";

import AnimalCard from "./AnimalCard";

const SightingList = ({ sightings }) => {
  const [selectedIndividual, setSelectedIndividual] = React.useState("");
  const [individualDetails, setIndividualDetails] = React.useState({});
  const [onlyHealthy, setOnlyHealthy] = React.useState(false);

  const loadIndividual = React.useCallback(
    () =>
      apiClient.getIndividual(selectedIndividual).then(setIndividualDetails),
    [selectedIndividual],
  );

  React.useEffect(() => {
    selectedIndividual !== undefined && loadIndividual();
  }, [selectedIndividual, loadIndividual]);

  const filteredSightings = onlyHealthy
    ? sightings.filter((sighting) => sighting.healthy)
    : sightings;

  const handleToggle = () => {
    setOnlyHealthy(!onlyHealthy);
  };

  return (
    <>
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
              <th>
                Healthy
                <br />
                (filter by health
                <input
                  type="checkbox"
                  value={onlyHealthy ? "on" : "off"}
                  onChange={handleToggle}
                />
                )
              </th>
              <th>Sighter Email</th>
              <th>Record Creation Timestamp</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredSightings.map(
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
                  <td>
                    <button
                      onClick={() => setSelectedIndividual(individual_id)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <AnimalCard {...{ selectedIndividual, individualDetails }} />
      </section>
    </>
  );
};

export default SightingList;
