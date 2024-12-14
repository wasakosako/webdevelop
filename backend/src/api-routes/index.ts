import express from "express";
import authRoutes from "./auth";
import taskRoutes from "./task"

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/task",taskRoutes);

export default router;
