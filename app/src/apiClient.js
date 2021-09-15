export const getSightings = () => _get("/api/sightings");

export const addSighting = (sighting) => _post("/api/sightings", sighting);

export const getIndividuals = () => _get("/api/individuals");

export const getIndividual = (individual_id) =>
  _get(`/api/individuals/${individual_id}`);

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
