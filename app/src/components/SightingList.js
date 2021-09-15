import React from "react";

import * as apiClient from "../apiClient";

import AnimalCard from "./AnimalCard";

const SightingList = ({ sightings }) => {
  const [selectedIndividual, setSelectedIndividual] = React.useState("");
  const [individualDetails, setIndividualDetails] = React.useState({});

  const loadIndividual = React.useCallback(
    () =>
      apiClient.getIndividual(selectedIndividual).then(setIndividualDetails),
    [selectedIndividual],
  );

  React.useEffect(() => {
    selectedIndividual !== undefined && loadIndividual();
  }, [selectedIndividual, loadIndividual]);

  return (
    <>
      <AnimalCard {...{ selectedIndividual, individualDetails }} />
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
              <th>More Details</th>
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
      </section>
    </>
  );
};

export default SightingList;
