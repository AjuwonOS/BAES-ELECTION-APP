import {
  getAllContestantData,
  getVoteTallyData,
} from "../util/sql/sqlFunctions.js";

export async function contestantDataController(req, res) {
  try {
    const contestantData = await getAllContestantData();
    res.status(200).json({
      success: true,
      message: "Contestant data fetched successfully",
      contestantData,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function voteTallyDataController(req, res) {
  try {
    const voteTallyData = await getVoteTallyData();
    res
      .status(200)
      .json({
        success: true,
        message: "Vote tally data fetched successfully",
        voteTallyData,
      });
  } catch (error) {
    console.log(error);
  }
}
