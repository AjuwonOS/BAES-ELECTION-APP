import { DB_CONTESTANT_TABLE, DB_VOTER_TABLE } from "../constants.js";

export const sqlScripts = {
  get: {
    voterByMatric_no: `SELECT name, matric_no, password, isVoted, level FROM ${DB_VOTER_TABLE} WHERE matric_no = $1`,
    contestantByMatric_no: `SELECT name , matric_no FROM ${DB_CONTESTANT_TABLE} WHERE matric_no = $1`,
    contestsData: `SELECT name, matric_no,level, position, department, image_name FROM ${DB_CONTESTANT_TABLE}`,
    isVoted: `SELECT isvoted FROM ${DB_VOTER_TABLE} WHERE matric_no = $1`,
    contestantVoteCount: `SELECT votes FROM ${DB_CONTESTANT_TABLE} WHERE matric_no = $1`,
    voteTallyData: `SELECT name, matric_no, position, level, votes, department FROM ${DB_CONTESTANT_TABLE}`,
  },

  insert: {
    voter: `INSERT INTO ${DB_VOTER_TABLE} (email, name, matric_no, level, payer_name, phone, password) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    contestant: `INSERT INTO ${DB_CONTESTANT_TABLE} (email, name, matric_no, level, position, phone, department, cgpa, image_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
  },

  update: {
    vote: `UPDATE ${DB_VOTER_TABLE} SET president = $1, 
    vice_president = $2, general_secretary = $3,
    financial_secretary = $4, treasurer = $5, welfare_director = $6,
    academic_director = $7, social_director = $8, sports_director = $9, pro = $10, pro2 = $11,
    assistant_welfare_director = $12, assistant_academic_director = $13,
    assistant_social_director = $14, assistant_general_secretary = $15,
    assistant_sports_director = $16, senate_representative = $17, senate_chairperson = $18, senate_vice_chairperson = $19 
    isvoted = true WHERE matric_no = $20`,
    contestantVoteCount: `UPDATE ${DB_CONTESTANT_TABLE} SET votes = votes + 1 WHERE matric_no = $1 RETURNING votes`,
  },
};
