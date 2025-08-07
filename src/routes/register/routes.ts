import express from "express";
import { registrationValidationRules, validate } from "../../middleware/validation/validator";
import { createRegistrationHandler } from "../../controller/registration.controller"

const RegisterRouter = express.Router()

RegisterRouter.post('/book-seat', registrationValidationRules(), validate, createRegistrationHandler);

export default RegisterRouter;