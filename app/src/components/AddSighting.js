import React from "react";

const AddSighting = ({ addSighting, individuals }) => {
  const individualList = individuals.map((individual) => (
    <option key={individual.id} value={individual.id}>
      {individual.nickname}
    </option>
  ));

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

  return (
    <>
      <h2>Add a New Sighting</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="time_seen">Time seen: </label>
        <input id="time_seen" name="time_seen" type="datetime-local" required />
        <label htmlFor="individual_id">Nickname of animal: </label>
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
        <button>Add sighting</button>
      </form>
    </>
  );
};

export default AddSighting;
