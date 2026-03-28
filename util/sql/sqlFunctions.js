import db from "../../connect.js";
import { sqlScripts } from "./sqlConstants.js";

async function execute(sql, params = []) {
  if (params && params.length > 0) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

async function fetchAll(sql, params) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

async function fetchFirst(sql, params) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });
};


export async function getUserByMatricNo(matric_no) {
  try {
    const response = await fetchFirst(sqlScripts.get.userByMatric_no, matric_no);
    return response
  } catch (error) {
    console.log(error);
  }
}