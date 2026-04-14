export const DB = process.env.DB;
export const PORT = parseInt(process.env.PORT) || 4000;
export const SALTVAL = parseInt(process.env.SALTVAL) || 10;
export const DB_VOTER_TABLE = /* process.env.DB_VOTER_TABLE || */ "testing";
export const DB_CONTESTANT_TABLE = process.env.DB_CONTESTANT_TABLE;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "lovette";
export const CONTESTANT_IMAGE_PATH = process.env.CONTESTANT_IMAGE_PATH;
export const FILE_UPLOAD_FIELD_NAME = process.env.FILE_UPLOAD_FIELD_NAME;

export const endPoints = {
  voterLogin: "/login",
  contestandData: "/contestantData",
  vote: "/vote",
  voteTally: "/voteTallyData",
  signUp: {
    voter: "/signup/voter",
    constestant: "/signup/contestant",
  },
};
