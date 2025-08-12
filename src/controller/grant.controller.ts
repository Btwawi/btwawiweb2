import { Response, Request } from "express";
import {
  createGrant,
  validateWithEmail,
  findGrant,
} from "../service/grant/grant.service";
import log from "../logger";
import { SendMailClient } from "zeptomail";
import { url, token } from "./registration.controller";

export const createGrantHandler = async (req: Request, res: Response) => {
  try {
    const { businessEmailAddress } = req.body;
    const businessExist = await findGrant({ businessEmailAddress });

    if (businessExist) {
      return res.status(403).json({
        success: false,
        message: "Business has already been registered!",
      });
    }

    let newBusiness = req.body;

    const business = await createGrant(newBusiness);

    let client = new SendMailClient({ url, token });

    client
      .sendMail({
        from: {
          address: process.env.EMAIL_DOMAIN,
        },
        to: [
          {
            email_address: {
              address: businessEmailAddress,
              name: "client",
            },
          },
        ],
        subject: "Grant",
        htmlbody: `
<h2 style="color:#2c3e50;">Thank You for Applying for the BTWAWI Business Grant</h2>
            <p>We’ve successfully received your application for the <strong>Business The Way Allaah Wants It</strong> grant program.</p>
            <p>Our team will carefully review your submission. If your application meets the criteria, we will contact you with the next steps.</p>
            <p>We appreciate your interest and commitment to doing business in a way that aligns with Islamic principles.</p>
            <br/>
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0;">BTWAWI Team</p>
            <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
            `,
      })
      .then((resp) => console.log("success"))
      .catch((error) => console.log("error", error));

    return res.status(200).json({
      success: true,
      data: {
        business,
      },
      message: "Grant created successfully!",
    });
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
