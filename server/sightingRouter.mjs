import express from "express";

import * as db from "./db.mjs";

const sightingRouter = express.Router();
sightingRouter.use(express.json());

sightingRouter.get("/", async (request, response) => 
  response.json(await db.getSightings()),
);

sightingRouter.post("/", async (request, response) =>
  response.status(201).json(await db.addSighting(request.body)),
);

export default sightingRouter;