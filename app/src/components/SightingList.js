import React from "react";

import * as apiClient from "../apiClient";

import AnimalCard from "./AnimalCard";

const SightingList = ({ sightings, individuals }) => {
  const [selectedIndividual, setSelectedIndividual] = React.useState("");
  const [individualDetails, setIndividualDetails] = React.useState({});
  const [displayHealthyOnly, setDisplayHealthyOnly] = React.useState(false);
  const [nicknameFilter, setNicknameFilter] = React.useState("");

  const loadIndividual = React.useCallback(
    () =>
      apiClient.getIndividual(selectedIndividual).then(setIndividualDetails),
    [selectedIndividual],
  );

  React.useEffect(() => {
    selectedIndividual !== undefined && loadIndividual();
  }, [selectedIndividual, loadIndividual]);

  const healthyFilteredSightings = displayHealthyOnly
    ? sightings.filter((sighting) => sighting.healthy)
    : sightings;

  const handleToggle = () => {
    setDisplayHealthyOnly(!displayHealthyOnly);
  };

  const nicknameList = individuals.map((individual) => (
    <option key={individual.id} value={individual.nickname}>
      {individual.nickname}
    </option>
  ));

  const filteredSightings = nicknameFilter
    ? healthyFilteredSightings.filter(
        (sighting) => sighting.nickname === nicknameFilter,
      )
    : healthyFilteredSightings;

  return (
    <section>
      <h2>List of Sightings</h2>
      <table>
        <thead>
          <tr>
            <th>Time Seen</th>
            <th>
              Nickname
              <select
                id="nickname"
                name="nickname"
                onBlur={(e) => setNicknameFilter(e.target.value)}
                required
              >
                <option value="">Select all</option>
                {nicknameList}
              </select>
              <button>filter</button>
            </th>
            <th>Species</th>
            <th>Location Seen</th>
            <th>
              Healthy
              <br />
              (Healthy animals only
              <input
                type="checkbox"
                value={displayHealthyOnly ? "on" : "off"}
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
                <td>{time_seen}</td>
                <td>{nickname}</td>
                <td>{name}</td>
                <td>{location}</td>
                <td>{healthy ? "Yes" : "No"}</td>
                <td>{sighter_email}</td>
                <td>{created_at}</td>
                <td>
                  <button onClick={() => setSelectedIndividual(individual_id)}>
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
  );
};

export default SightingList;
