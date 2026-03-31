export const DB = process.env.DB;
export const SALTVAL = parseInt(process.env.SALTVAL) || 10;
export const DB_VOTER_TABLE = /* process.env.DB_VOTER_TABLE || */ "testing";
export const DB_CONTESTANT_TABLE = process.env.DB_CONTESTANT_TABLE;
export const TOKEN_SECRET = process.env.TO1KEN_SECRET || "lovette"


