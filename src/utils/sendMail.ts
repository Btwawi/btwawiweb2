import { zeptoClient } from "./mailService";
import dotenv from 'dotenv';
dotenv.config();

interface SendMailOptions {
  to: string;
  name?: string;
  subject: string;
  html: string;
}

export const sendMail = async ({ to, name, subject, html }: SendMailOptions) => {
  try {
    const response = await zeptoClient.sendMail({
      from: {
        address: process.env.ZEPTO_SENDER_EMAIL,
        name: 'BTWAWI Team',
      },
      to: [
        {
          email_address: {
            address: to,
            name: name || "",
          },
        },
      ],
      subject,
      htmlbody: html,
    });

    console.log("Email sent", response);
    return response;
  } catch (error) {
    console.error("ZeptoMail error", error);
    throw error;
  }
}