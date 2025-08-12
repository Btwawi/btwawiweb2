import { Request, Response } from "express";
import { createNomination } from "../service/nomination/nomination.service";
import { SendMailClient } from "zeptomail";
import { url, token } from "./registration.controller";

export const createNominationHandler = async (req: Request, res: Response) => {
  try {
    let { email, ...newNomination } = req.body;
    const nomination = await createNomination(newNomination);

    let client = new SendMailClient({ url, token });

    client
      .sendMail({
        from: {
          address: process.env.EMAIL_DOMAIN,
        },
        to: [
          {
            email_address: {
              address: email,
              name: "client",
            },
          },
        ],
        subject: "Grant",
        htmlbody: `
         <h2 style="color:#2c3e50;">Thank You for Nominating a Business</h2>
            <p>Assalamu Alaikum ${email},</p>
            <p>We’ve successfully received your nomination for the <strong>Business The Way Allaah Wants It (BTWAWI)</strong> initiative.</p>
            <p>We sincerely appreciate your effort in recognizing a business that embodies or aspires to uphold Islamic values in its operations.</p>
            <p>Our team will review the nominated business and assess its alignment with the goals of the BTWAWI program. If it meets the criteria, we will reach out to the nominee for the next steps.</p>
            <p>Thank you once again for your participation and for supporting the mission of promoting ethical, Shariah-compliant business practices.</p>
            <br/>
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0;">The BTWAWI Team</p>
            <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>`,
      })
      .then((resp) => console.log("success"))
      .catch((error) => console.log("error", error));

    return res.status(200).json({
      success: true,
      data: {
        nomination,
      },
      message: "Business successfully nominated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
