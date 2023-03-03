import { Router } from "express"
import InitialController from "@controllers/InitialController"
import { ScheduleCreate, ScheduleDelete, ScheduleEdit, ScheduleIndex, ScheduleList } from "@controllers/Schedule"
import { RPMCreate, RPMDelete, RPMEdit, RPMIndex, RPMList } from "@controllers/RPMController"
import { LocationCreate, LocationDelete, LocationEdit, LocationIndex, LocationList } from "@controllers/LocationController"
import { PainelsCreate, PainelsDelete, PainelsEdit, PainelsIndex, PainelsList } from "@controllers/PainelsController"

const router = Router()

router.get('/', InitialController)
router.post('/schedule', ScheduleCreate)
router.get('/schedule', ScheduleList)
router.get('/schedule/:id', ScheduleIndex)
router.post('/schedule/:id', ScheduleEdit)
router.post('/schedule/:id', ScheduleDelete)
router.get('/rpm', RPMCreate)
router.get('/rpm/:id', RPMList)
router.post('/rpm', RPMIndex)
router.post('/rpm/:id', RPMEdit)
router.post('/rpm/:id', RPMDelete)
router.get('/location', LocationCreate)
router.get('/location/:id', LocationList)
router.post('/location', LocationIndex)
router.post('/location/:id', LocationEdit)
router.post('/location/:id', LocationDelete)
router.get('/painels', PainelsCreate)
router.get('/painels/:id', PainelsList)
router.post('/painels', PainelsIndex)
router.post('/painels/:id', PainelsEdit)
router.post('/painels/:id', PainelsDelete)

export default router