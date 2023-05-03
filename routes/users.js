/** @format */

import express from "express";
import {
  postUser,
  getUserList,
  editLocation,
  getUsernameInfo,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();

router.post("/post", postUser);

router.get("/userList", getUserList);

router.put("/:username", editLocation);

router.get("/:username", getUsernameInfo);

router.delete("/:username", deleteUser);

export default router;
