import { DB_CONTESTANT_TABLE, DB_VOTER_TABLE } from "../constants.js";

export const sqlScripts = {
  get: {
    voterByMatric_no: `SELECT name , matric_no, password FROM ${DB_VOTER_TABLE} WHERE matric_no = ?`,
    contestantByMatric_no: `SELECT name , matric_no FROM ${DB_CONTESTANT_TABLE} WHERE matric_no = ?`,
    contestsData: `SELECT * FROM ${DB_CONTESTANT_TABLE}`,
  },

  insert: {
    voter: `INSERT INTO ${DB_VOTER_TABLE} (email, name, matric_no, level, payer_name, phone, password) VALUES (?,?,?,?,?,?,?)`,
    contestant: `INSERT INTO ${DB_CONTESTANT_TABLE} (email, name, matric_no, level, position, phone, department, cgpa, image_name) VALUES (?,?,?,?,?,?,?,?,?)`,
  },
};
