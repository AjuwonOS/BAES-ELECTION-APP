import { voteSchema } from "../middleware/schema.js";
import { collateVote } from "../util/functions.js";
import { getIsVoted, updateVoterDetails } from "../util/sql/sqlFunctions.js";
import { io } from "../index.js";


export async function voteController(req, res) {
  try {

    const voteData = req.body;
    const { error } = voteSchema.validate(voteData);
    const matric_no = req.user.id;
    const { isvoted } = await getIsVoted(matric_no);
    
    if (isvoted)
      return res
        .status(401)
        .json({
          success: false,
          message: "This voter has already cast their vote",
        });
    
    
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    
    
    await updateVoterDetails(voteData, matric_no);    
    const updatedVoteData = await collateVote(voteData)
    io.emit("clientVoteUpdate", updatedVoteData)
    res.status(200).json({success: true, message: "Vote Successfully cast"});
  } catch (error) {
    console.log(error);
  }
}
