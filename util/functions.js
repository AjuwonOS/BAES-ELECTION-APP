import { compare, hash } from "bcrypt";
import * as crypto from "crypto";
import { rm } from "fs";
import {
  getContestantVoteCount,
  incrementContestantVoteCount,
} from "./sql/sqlFunctions.js";

// DB connnect functions
export function dbConnectCallback(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Table created successful.");
}
export function dbOperationCallback(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Operation completed successful.");
}

//Hash functions
export async function doHash(password, saltValue) {
  const result = await hash(password, saltValue);
  return result;
}

export async function doHashValidation(password, hashedPassword) {
  const result = await compare(password, hashedPassword);
  return result;
}

export const generatePassword = () => crypto.randomBytes(8).toString("hex");

//File removal functions
export function removeFile(filePath) {
  rm(filePath, { force: true }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    /* console.log(`File ${filePath} deleted successfully!`); */
  });
}

//Vote collation functions
export async function collateVote(voteData) {
  try {
    const arrVoteData = Object.values(voteData);
    let updateVoteData = Object.fromEntries(
      arrVoteData.map((matric_no) => [matric_no, 0]),
    );

    await Promise.all(
      arrVoteData.map(async (matric_no) => {
        const newVote = await incrementContestantVoteCount(matric_no);
        updateVoteData[matric_no] = newVote;
      }),
    );

    return updateVoteData;
    
  } catch (error) {
    console.log(error);
  }

  /* 
    for each matric_no
      find the voteCount
      increment voteCount++
      return  voteCount
  */
}
