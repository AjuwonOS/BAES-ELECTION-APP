export const DB = process.env.DB;
export const PORT = parseInt(process.env.PORT) || 4000;
export const SALTVAL = parseInt(process.env.SALTVAL) || 10;
export const DB_VOTER_TABLE = process.env.DB_VOTER_TABLE;
export const DB_CONTESTANT_TABLE = process.env.DB_CONTESTANT_TABLE;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "lovette";
export const CONTESTANT_IMAGE_PATH = process.env.CONTESTANT_IMAGE_PATH;
export const FILE_UPLOAD_FIELD_NAME = process.env.FILE_UPLOAD_FIELD_NAME;
export const POSTGRES_DB_HOST = process.env.POSTGRES_DB_HOST;
export const POSTGRES_DB_PORT = parseInt(process.env.POSTGRES_DB_PORT);
export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_DB_USER = process.env.POSTGRES_DB_USER;
export const POSTGRES_DB_PASSWORD = process.env.POSTGRES_DB_PASSWORD;

export const endPoints = {
  voterLogin: "/login",
  contestandData: "/contestantData",
  vote: "/vote",
  voteTally: "/voteTallyData",
  voterSignUp: "/signup/voter",
  constestantSignUp: "/signup/contestant",
};

export const clientPath = "client";
