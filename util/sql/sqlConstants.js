import { TABLE_NAME } from "../constants.js";

export const sqlScripts = {
  get: {
    userByMatric_no: `SELECT name , matric_no, password FROM ${TABLE_NAME} WHERE matric_no = ?`,
  },
};
