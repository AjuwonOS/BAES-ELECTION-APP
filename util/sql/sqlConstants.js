import { DB_CONTESTANT_TABLE, DB_VOTER_TABLE } from "../constants.js";

export const sqlScripts = {
  get: {
    voterByMatric_no: `SELECT name , matric_no, password, isVoted FROM ${DB_VOTER_TABLE} WHERE matric_no = ?`,
    contestantByMatric_no: `SELECT name , matric_no FROM ${DB_CONTESTANT_TABLE} WHERE matric_no = ?`,
    contestsData: `SELECT name, matric_no,level, position, department, image_name FROM ${DB_CONTESTANT_TABLE}`,
    isVoted: `SELECT isVoted FROM ${DB_VOTER_TABLE} WHERE matric_no = ?`,
    contestantVoteCount: `SELECT votes FROM ${DB_CONTESTANT_TABLE} WHERE matric_no = ?`,
    voteTallyData: `SELECT name, matric_no, position, votes FROM ${DB_CONTESTANT_TABLE}`
  },

  insert: {
    voter: `INSERT INTO ${DB_VOTER_TABLE} (email, name, matric_no, level, payer_name, phone, password) VALUES (?,?,?,?,?,?,?)`,
    contestant: `INSERT INTO ${DB_CONTESTANT_TABLE} (email, name, matric_no, level, position, phone, department, cgpa, image_name) VALUES (?,?,?,?,?,?,?,?,?)`,
  },

  update: {
    vote: `UPDATE ${DB_VOTER_TABLE} SET president = ?, 
    vice_president = ?, general_secretary = ?,
    financial_secretary = ?, treasurer = ?, welfare_director = ?,
    academic_director = ?, social_director = ?, sports_director = ?, pro = ?,
    assistant_welfare_director = ?, assistant_academic_director = ?,
    assistant_social_director = ?, assistant_general_secretary = ?,
    assistant_sports_director = ?, senate_representative = ?,
    isVoted = 1 WHERE matric_no = ?`,
    
    contestantVoteCount: `UPDATE ${DB_CONTESTANT_TABLE} SET votes = votes + 1 WHERE matric_no = ? RETURNING votes`
  },
};
