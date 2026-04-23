import db from "../../connect.js";
import { sqlScripts } from "./sqlConstants.js";

async function execute(sql, params = []) {
  const res = await db.query(sql, params);
  return res.rows[0];
}

async function fetchAll(sql, params = []) {
  const res = await db.query(sql, params);
  return res.rows;
}

async function fetchFirst(sql, params = []) {
  const res = await db.query(sql, params);
  return res.rows[0];
}

// Get functions
export async function getVoterByMatricNo(matric_no) {
  try {
    const response = await fetchFirst(sqlScripts.get.voterByMatric_no, [
      matric_no,
    ]);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getContestantByMatricNo(matric_no) {
  try {
    const response = await fetchFirst(sqlScripts.get.contestantByMatric_no, [
      matric_no,
    ]);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllContestantData() {
  try {
    const response = await fetchAll(sqlScripts.get.contestsData);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getVoteTallyData() {
  try {
    const response = await fetchAll(sqlScripts.get.voteTallyData);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getIsVoted(matric_no) {
  try {
    const response = await fetchFirst(sqlScripts.get.isVoted, [matric_no]);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getContestantVoteCount(matric_no) {
  try {
    const response = await fetchFirst(sqlScripts.get.contestantVoteCount, [
      matric_no,
    ]);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// Insert functions
export async function insertVoter(args) {
  try {
    const response = await execute(sqlScripts.insert.voter, args);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function insertContestant(args) {
  try {
    const response = await execute(sqlScripts.insert.contestant, args);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//Update functions
export async function updateVoterDetails(voteData, matric_no) {
  try {
    const arrVoteData = Object.values(voteData);
    const response = await execute(sqlScripts.update.vote, [
      ...arrVoteData,
      matric_no,
    ]);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateContestantVoteCount(matric_no) {
  try {
    const row = await fetchFirst(sqlScripts.update.contestantVoteCount, [
      matric_no,
    ]);

    return row.votes;
  } catch (error) {
    console.log(error);
  }
}