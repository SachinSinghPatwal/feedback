import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {Feedback} from "../models/feedback.model.js";
const submitFeedback = asyncHandler(async (req, res) => {
  const {senderFullName, email, feedbackContent} = req.body;
  if (
    [senderFullName, email, feedbackContent].some((each) => each.trim() === "")
  ) {
    throw new ApiError(404, "All fields are required");
  }

  const feedback = await Feedback.create({
    senderFullName,
    email,
    feedbackContent,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, feedback, "feedback submitted SuccessFully"));
});

export {submitFeedback};
