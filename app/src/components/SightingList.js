import React from "react";

import Card from "./Card";

const SightingList = ({ sightings }) => {
  const [individual, setIndividual] = React.useState("");

  return (
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
};

export default SightingList;
