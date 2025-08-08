import { SendMailClient } from "zeptomail";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.ZEPTO_API_URL as string;
const token = process.env.ZEPTO_API_TOKEN as string;

export const zeptoClient = new SendMailClient({url, token})