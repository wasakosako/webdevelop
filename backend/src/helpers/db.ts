import mongoose from "mongoose";

mongoose.set("strictQuery", true);

import env from "dotenv"
env.config();

mongoose.connect(process.env.MONGO_URI||"8080")