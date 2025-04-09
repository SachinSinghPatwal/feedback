import mongoose, {Schema} from "mongoose";

const feedbackSchema = new Schema(
  {
    senderFullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    feedbackContent: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
