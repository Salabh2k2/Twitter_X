import express from "express"
import { Login, Logout, Register } from "../controllers/userController.js"
import { createTweet, deleteTweet } from "../controllers/tweetController.js"
import isAuthenticated from "../config/auth.js"
const router = express.Router()

router.route("/create").post(isAuthenticated,createTweet)
router.route("/delete/:id").delete(deleteTweet)

export default router