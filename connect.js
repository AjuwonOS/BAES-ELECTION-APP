import sqlite3 from "sqlite3";
import {DB} from "./util/constants.js"
import { electorateModel, contestantModel } from "./models/dbModels.js";
import { dbConnectCallback, dbOperationCallback } from "./util/functions.js";

const db = new sqlite3.Database(DB, dbConnectCallback);

const models = [electorateModel, contestantModel];
models.forEach((model) => {
  db.run(model, dbOperationCallback);
});

export default db;
