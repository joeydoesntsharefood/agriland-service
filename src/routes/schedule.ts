import { ScheduleCreate, ScheduleDelete, ScheduleEdit, ScheduleIndex, ScheduleList } from "@controllers/Schedule"
import { Router } from "express"

const routerSchedule = Router()

routerSchedule.post('/', ScheduleCreate)
routerSchedule.get('/', ScheduleList)
routerSchedule.get('/:id', ScheduleIndex)
routerSchedule.post('/:id', ScheduleEdit)
routerSchedule.post('/:id/delete', ScheduleDelete)

export default routerSchedule