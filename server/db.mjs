import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getSightings = () => 
  db.any(
    `SELECT si.*, ind.nickname, sp.name
    FROM sightings si
    LEFT JOIN individuals ind
    ON si.individual_id = ind.id
    LEFT JOIN species sp
    ON ind.species_id = sp.id`
  );

export const addSighting = (sighting) => 
  db.one(
    "INSERT INTO sightings(time_seen, individual_id, location, healthy, sighter_email) VALUES(${time_seen}, ${individual_id}, ${location}, ${healthy}, ${sighter_email}) RETURNING *",
    sighting,
  );

export const getIndividuals = () => db.any("SELECT id, nickname FROM individuals");

export const getIndividual = (individual_id) => {
  const sql =  `SELECT *  FROM individuals WHERE id=${individual_id}`;

  return db.one(sql, { individual_id })
}

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
