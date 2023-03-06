import { Router } from "express"
import InitialController from "@controllers/InitialController"
import { ScheduleCreate, ScheduleDelete, ScheduleEdit, ScheduleIndex, ScheduleList } from "@controllers/Schedule"
import { RPMCreate, RPMDelete, RPMEdit, RPMIndex, RPMList } from "@controllers/RPMController"
import { LocationCreate, LocationDelete, LocationEdit, LocationIndex, LocationList } from "@controllers/LocationController"
import { PainelsCreate, PainelsDelete, PainelsEdit, PainelsIndex, PainelsList } from "@controllers/PainelsController"
import { UserCreate, UserDelete, UserEdit, UserIndex, UserList } from "@controllers/UserController"
import { AuthSignin, AuthSignup } from "@controllers/AuthsController"

const router = Router()
// Hello World
router.get('/', InitialController)
// Schedule Routes
router.post('/schedule', ScheduleCreate)
router.get('/schedule', ScheduleList)
router.get('/schedule/:id', ScheduleIndex)
router.post('/schedule/:id', ScheduleEdit)
router.post('/schedule/:id/delete', ScheduleDelete)
// RPM Links Routes
router.post('/rpm', RPMCreate)
router.get('/rpm', RPMList)
router.get('/rpm/:id', RPMIndex)
router.post('/rpm/:id', RPMEdit)
router.post('/rpm/:id/delete', RPMDelete)
// Location Routes
router.post('/location', LocationCreate)
router.get('/location/:id', LocationList)
router.get('/location', LocationIndex)
router.post('/location/:id', LocationEdit)
router.post('/location/:id/delete', LocationDelete)
// Painels Routes
router.post('/painels', PainelsCreate)
router.get('/painels/:id', PainelsList)
router.get('/painels', PainelsIndex)
router.post('/painels/:id', PainelsEdit)
router.post('/painels/:id/delete', PainelsDelete)
// User Routes
router.post('/user', UserCreate)
router.get('/user/:id', UserList)
router.get('/user', UserIndex)
router.post('/user/:id', UserEdit)
router.post('/user/:id/delete', UserDelete)
// Auths Routes
router.post('/signin', AuthSignin)
router.post('/signup', AuthSignup)

export default router