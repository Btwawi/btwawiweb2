import { Request, Response } from "express";
import { createBoothRegistration, findRegisteredBooth } from "../service/registerBooth/registerBooth.service";
import { sendBoothApplicationMail } from '../utils/sendBoothRegistrationMail'


export const createBoothRegistrationHandler = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const businessExist = await findRegisteredBooth({email})
        if (businessExist) {
            return res.status(403).json({
                success: false,
                message: "This business has already applied for a booth"
            })
        }

        let newBooth = req.body
        const booth = await createBoothRegistration(newBooth)

       await sendBoothApplicationMail(booth.email, booth.vendorCompanyName);

        return res.status(201).json({
            success: true,
            data: {
                booth
            },
            message: "You have successfully applied to securing a booth"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
} 
