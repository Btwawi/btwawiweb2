import express from "express";
import { createBoothRegistrationHandler } from "../../controller/registerBooth.controller"
import { boothRegistrationValidationRules, validate } from "../../middleware/validation/validator"

const BoothRouter = express.Router()

BoothRouter.post('/secure-booth', boothRegistrationValidationRules(), validate, createBoothRegistrationHandler);

export default BoothRouter;