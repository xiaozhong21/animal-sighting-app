import express from "express";

import * as db from "./db.mjs";

const individualRouter = express.Router();
individualRouter.use(express.json());

individualRouter.get("/", async (request, response) => 
  response.json(await db.getIndividuals()),
);

export default individualRouter;