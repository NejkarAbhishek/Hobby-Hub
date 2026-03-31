import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "*" // Allow specified frontend or all origins
}));

app.use(express.json({ limit: "10mb" })); // Increased limit for Base64 image payload if sent via JSON.
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Removed local static file serving. Images are served directly as Base64 strings from MongoDB.

app.use("/api/users", userRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/events", eventRoutes);
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
