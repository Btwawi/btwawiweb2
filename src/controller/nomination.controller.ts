import { Request, Response } from "express"
import { createNomination } from "../service/nomination/nomination.service"
import { sendNominationMail } from "../utils/sendMail"

export const createNominationHandler = async (req:Request, res: Response) => {
    try{
        let newNomination = req.body;
        const nomination = await createNomination(newNomination)
        
        await sendNominationMail(nomination.emailAddress);

        return res.status(200).json({
            success: true,
            data: {
                nomination
            },
            message: "Business successfully nominated"
        })

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    } 
}