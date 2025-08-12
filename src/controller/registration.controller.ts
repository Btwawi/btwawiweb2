import { Request, Response } from "express";
import {
  createRegistration,
  validateWithEmail,
  findRegisteredSeat,
  findAllRegisteredSeats,
  findRegisteredSeats,
} from "../service/register/register.service";
import { omit, get } from "lodash";
import log from "../logger";
import { SendMailClient } from "zeptomail";

export const url = process.env.EMAIL_URL as string;
export const token = process.env.EMAIL_TOKEN as string;

export const createRegistrationHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const userEmail = get(req, "body.email");

    const userExist = await findRegisteredSeat({ email: userEmail }, {});

    if (userExist) {
      return res.status(403).json({
        success: false,
        message: " User with same email already exists",
      });
    }

    if (req.body.phoneNumber) {
      const userPhone = get(req, "body.phoneNumber");

      const userPhoneExist = await findRegisteredSeat(
        {
          phoneNumber: userPhone,
        },
        {}
      );

      if (userPhoneExist) {
        return res.status(409).json({
          success: false,
          message: " User with same phone already exists",
        });
      }
    }

    let newUser = req.body;

    console.log("newUser", newUser);
    const user = await createRegistration(req.body);

    let client = new SendMailClient({ url, token });

    client
      .sendMail({
        from: {
          address: process.env.EMAIL_DOMAIN,
        },
        to: [
          {
            email_address: {
              address: userEmail,
              name: "client",
            },
          },
        ],
        subject: "Registration",
        htmlbody: `
      <h2 style="color:#2c3e50;">Thank You for Your Booth Application</h2>
      <p>Dear ${userEmail || "Applicant"},</p>
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

    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    const newError = error as any;
    log.error(newError);
    res.status(409).send(newError.message);
  }
};
