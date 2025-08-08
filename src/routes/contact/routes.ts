import express from 'express';
import { createContactMessageHandler } from '../../controller/contact.controller'

const ContactRouter = express.Router();

ContactRouter.post('/send-message', createContactMessageHandler);

export default ContactRouter;