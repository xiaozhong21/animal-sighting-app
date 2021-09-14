import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getSightings = () => db.any("SELECT * FROM sightings");

export const addSighting = (sighting) => 
  db.one(
    "INSERT INTO sightings(time_seen, individual, location, healthy, sighter_email, created_at) VALUES(${time_seen}, ${individual}, ${location}, ${healthy}, ${sighter_email}, ${created_at}) RETURNING *",
    sighting,
  );

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
