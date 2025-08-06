import express from "express";
import { createNominationHandler } from "../../controller/nomination.controller"
import { nominationValidationRules, validate } from "../../middleware/validation/validator"

const NominateRouter = express.Router()

NominateRouter.post('/nominate-business', nominationValidationRules(), validate, createNominationHandler)

export default NominateRouter;