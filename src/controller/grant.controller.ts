import { Response, Request } from 'express';
import { createGrant, validateWithEmail, findGrant } from '../service/grant/grant.service';
import log from '../logger';
import { sendBusinessGrantMail } from '../utils/sendBusinessGrantMail'

export const createGrantHandler = async (req:Request, res:Response) => {
    try{
        const { businessEmailAddress } = req.body;
        const businessExist = await findGrant({businessEmailAddress});

        if (businessExist) {
            return res.status(403).json({
                success: false,
                message: "Business has already been registered!"
            })
        }

        let newBusiness = req.body;

        const business = await createGrant(newBusiness);

        // await sendBusinessGrantMail(business.businessEmailAddress, business.businessName);

        return res.status(200).json({
            success: true,
            data: {
                business
            },
            message: "Grant created successfully!"
        })


    } catch (error) {
        log.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}