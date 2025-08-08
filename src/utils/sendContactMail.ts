import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()

interface SendMailInput {
  to: string;
  subject: string;
  html: string;
}

export const sendContactMail = async ({ to, subject, html }: SendMailInput) => {
    const apiKey = process.env.ZEPTO_API_KEY;
    const fromEmail = process.env.ZEPTO_SENDER_EMAIL;
    const fromName = "BTWAWI Website"

    const data = {
        from: {
            address: fromEmail,
            name: fromName
        },
        to: [
            {
                email_address: {
                    address: to
                }
            }
        ],
        subject,
        htmlbody: html,
    };

    try {
        const response = await axios.post(
            'https://api.zeptomail.com/v1.1/email',
            data,
            {
                headers: {
                    'Authorization': `Zoho-enczapikey ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data
    } catch (error: any) {
        console.error("Failed to send email:", error.response?.data || error.message);
        throw new Error("Failed to send email");
    }
}