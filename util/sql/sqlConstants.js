import { TABLE_NAME } from "../constants.js";

export const sqlScripts = {
  get: {
    userByMatric_no: `SELECT name , matric_no, password FROM ${TABLE_NAME} WHERE matric_no = ?`,
  },

  insert: {
    voter: `INSERT INTO ${TABLE_NAME} (email, name, matric_no, level, payer_name, phone, password) VALUES (?,?,?,?,?,?,?)`,
    /* contestant: `INSERT INTO $` */
  }
};
