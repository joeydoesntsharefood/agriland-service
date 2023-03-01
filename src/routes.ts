import { Router } from "express"
import InitialController from "@controllers/InitialController"

const router = Router()

router.get('/', InitialController)

export default router