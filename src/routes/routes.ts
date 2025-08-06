import express from 'express';
import { Request, Response } from 'express';
import UserRouter from './users/routes';
import OrderRouter from './order/routes';
import PartnerRouter from './partner/routes';
import PostRouter from './post/routes';
import VolunteerRouter from './volunteer/routes';
import GrantRouter from './grant/routes';
import NominateRouter from './nominate/routes';
import { registerVolunteerHandler } from '../controller/registration.controller';

const Router = express.Router();

Router.use('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

//Routes
Router.use('/user', UserRouter);
Router.use("/order", OrderRouter);
Router.use("/post", PostRouter);
Router.use("/partner", PartnerRouter);
Router.use("/volunteer", VolunteerRouter);
Router.use("/grant", GrantRouter);
Router.use("/nominate", NominateRouter)

export default Router;