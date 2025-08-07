import { Request, Response } from "express";
import { createRegistration, validateWithEmail, findRegisteredSeat, findAllRegisteredSeats, findRegisteredSeats } from "../service/register/register.service";
import { omit, get } from "lodash";
import log from "../logger";
import { sendBookingRegistrationMail } from "../utils/sendBookingRegistrationMail"

export const createRegistrationHandler = async (req: Request, res: Response) => {
  try {
    const userEmail = get(req, "body.email");

    const userExist = await findRegisteredSeat({ email: req.body.email }, {});

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

    // await sendBookingRegistrationMail(user.email, user.fullName);

    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    const newError = error as any;
    log.error(newError);
    res.status(409).send(newError.message);
  }
};
