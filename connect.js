/* import sqlite3 from "sqlite3";
import {DB} from "./util/constants.js"
import { electorateModel, contestantModel } from "./models/dbModels.js";
import { dbConnectCallback, dbOperationCallback } from "./util/functions.js";

const db = new sqlite3.Database(DB, dbConnectCallback);

const models = [electorateModel, contestantModel];
models.forEach((model) => {
  db.run(model, dbOperationCallback);
});

export default db;
 */

import { Pool } from "pg";
import { electorateModel, contestantModel } from "./models/dbModels.js"
import { POSTGRES_DB_CONNECTION_STRING } from "./util/constants.js";

const models = [electorateModel, contestantModel];

const client = new Pool({connectionString:POSTGRES_DB_CONNECTION_STRING, ssl:{rejectUnauthorized: false}});

/* await client
  .connect()
  .then(() => console.log("Database connection successful."));
 */
client.on("error", (err) => {
  console.error("Something went wrong", err.stack)
})

for (let model of models)
  await client.query(model)


export default client