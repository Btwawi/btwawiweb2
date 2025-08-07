import express from 'express';
import { createGrantHandler } from '../../controller/grant.controller'
import { grantValidationRules, validate } from '../../middleware/validation/validator';

const GrantRouter = express.Router();

GrantRouter.post('/request-grant', grantValidationRules(), validate,  createGrantHandler);

export default GrantRouter;