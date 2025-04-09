import express from "express";
import cors from "cors";

const app = express();
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// route import
import userRoute from "./routes/userRoute.routes.js";
import adminRoute from "./routes/adminRoute.routes.js";

// route declaration or forwarding to route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
export default app;
