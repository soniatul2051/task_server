import { Router } from "express"
import { activateUser, getCurrentUser, loginUser, registerUser, deleteUser } from "../controller/user.controller.js"
import verifyUserToken from "../middleware/auth.js"
const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/").get(verifyUserToken,getCurrentUser)
router.route("/activate/:accessToken").get(activateUser)
router.route("/delete").get(verifyUserToken,deleteUser)
export default router