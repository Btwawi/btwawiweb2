import { Request, Response } from "express";
import { createContactMessage } from "../service/contactMessage/contactUs.service";
import { SendMailClient } from "zeptomail";
import { url, token } from "./registration.controller";

export const createContactMessageHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const newContactMessage = await createContactMessage(req.body);

    const { name, email, message } = newContactMessage;

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
          <p>Dear ${name || "Applicant"},</p>
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

    client
      .sendMail({
        from: {
          address: process.env.EMAIL_DOMAIN,
        },
        to: [
          {
            email_address: {
              address: process.env.EMAIL_DOMAIN,
              name: "client",
            },
          },
        ],
        subject: "New Contact Message",
        htmlbody: `
                 <h2 style="color:#2c3e50;">There is a new Contact Message For You</h2>
                <p>Dear ${"BTWAWI"},</p>
                <p>There is a new contact message for you from ${name}.</p>
                <br/>
                <p style="margin: 0;">Warm regards,</p>
                <p style="margin: 0;">BTWAWI Team</p>
                <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
                             `,
      })
      .then((resp) => console.log("success"))
      .catch((error) => console.log("error", error));

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
