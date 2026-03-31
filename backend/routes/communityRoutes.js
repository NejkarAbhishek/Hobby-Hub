import express from "express";
import {
  createCommunity,
  viewCommunities,
  joinCommunity,
  manageMembers,
  getCommunityById,
  getAdminOverview,
  updateCommunityProfile,
  getAllChats,
  sendChat
} from "../controllers/communityController.js";
import protect from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.memoryStorage(); // Save image to memory buffer

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/; // Allowed image formats
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true); // Accept the file
  } else {
    cb(
      new Error("Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed."),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

const router = express.Router();

// Routes
router.post("/create", protect, upload.single("image"), createCommunity);
router.get("/", protect, viewCommunities);
router.get("/:id", protect, getCommunityById);
router.post("/:id/join", protect, joinCommunity);
router.put("/:id/members", protect, manageMembers);
router.get("/api/admin-overview", protect, getAdminOverview);
router.post(
  "/:id/uploadCommunityImage",
  protect,
  upload.single("image"),
  updateCommunityProfile
);
router.post("/:id/chat", protect, sendChat);
router.get("/:id/chats", protect, getAllChats);


export default router;
