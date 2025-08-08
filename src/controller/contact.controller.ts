import { Request, Response } from "express";
import { createContactMessage } from "../service/contactMessage/contactUs.service";
import { sendContactMail } from "../utils/sendContactMail";
import { sendMail } from "../utils/sendMail";

export const createContactMessageHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const newContactMessage = await createContactMessage(req.body);

    const { name, email, message } = newContactMessage;

    // await sendContactMail({
    //   to: "info@btwawi.com",
    //   subject: `New Contact Message from ${name}`,
    //   html: `
    //             <h3>You have received a new contact message from your website.</h3>
    //             <p><strong>Name:</strong> ${name}</p>
    //             <p><strong>Email:</strong> ${email}</p>
    //             <p><strong>Message:</strong></p>
    //             <p>${message}</p>
    //         `,
    // });

    // await sendMail({
    //   to: email,
    //   name,
    //   subject: `Thank You for Contacting BTWAWI`,
    //   html: `
    //         <h2 style="color:#2c3e50;">Thank you, ${name}!</h2>
    //         <p>We have received your message:</p>
    //         <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">${message}</blockquote>
    //         <p>Our team will get back to you as soon as possible.</p>
    //         <br/>
    //         <p style="margin: 0;">Warm regards,</p>
    //         <p style="margin: 0;">BTWAWI Team</p>
    //         <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply.</p>
    //         `,
    // });

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
