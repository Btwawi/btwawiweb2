import nodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()



export const transporter = nodeMailer.createTransport({
    service: 'SMTP',
    host: process.env.ZEPTO_HOST!,
    port: parseInt(process.env.ZEPTO_PORT!),
    secure: false,
    auth: {
        user: process.env.ZEPTO_USER,
        pass: process.env.ZEPTO_PASS
    }
})