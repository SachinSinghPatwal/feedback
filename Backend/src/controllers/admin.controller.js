import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {Feedback} from "../models/feedback.model.js";

const getAllFeedback = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find().select("-__v -updatedAt -_id");
  return res
    .status(200)
    .json(new ApiResponse(200, feedbacks, "fetched Successfully"));
});

export {getAllFeedback};
