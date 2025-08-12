import { Request, Response } from "express";
import {
  createBoothRegistration,
  findRegisteredBooth,
} from "../service/registerBooth/registerBooth.service";
import { SendMailClient } from "zeptomail";
import { url, token } from "./registration.controller";

export const createBoothRegistrationHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;
    const businessExist = await findRegisteredBooth({ email });
    if (businessExist) {
      return res.status(403).json({
        success: false,
        message: "This business has already applied for a booth",
      });
    }

    let newBooth = req.body;
    const booth = await createBoothRegistration(newBooth);

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
        subject: "Vendor Booth Registration",
        htmlbody: `
       <h2 style="color:#2c3e50;">Thank You for Your Booth Application</h2>
      <p>Dear ${email || "Applicant"},</p>
      <p>We have successfully received your application to secure a booth for the upcoming <strong>Business The Way Allaah Wants It</strong> (BTWAWI) event.</p>
      <p>Our team is currently reviewing your submission. Once your application is processed, we will reach out to you with further details and next steps.</p>
      <p>We appreciate your interest in participating and supporting businesses that align with Islamic values.</p>
      <br/>
      <p style="margin: 0;">Warm regards,</p>
      <p style="margin: 0;">BTWAWI Team</p>
      <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
                   `,
      })
      .then((resp) => console.log("success"))
      .catch((error) => console.log("error", error));

    return res.status(201).json({
      success: true,
      data: {
        booth,
      },
      message: "You have successfully applied to securing a booth",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
