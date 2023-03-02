import { Router } from "express"
import InitialController from "@controllers/InitialController"
import { ScheduleCreate, ScheduleDelete, ScheduleEdit, ScheduleIndex, ScheduleList } from "@controllers/Schedule"

const router = Router()

router.get('/', InitialController)
router.post('/schedule', ScheduleCreate)
router.get('/schedule', ScheduleList)
router.get('/schedule/:id', ScheduleIndex)
router.post('/schedule/:id', ScheduleEdit)
router.post('/schedule/:id', ScheduleDelete)

export default router