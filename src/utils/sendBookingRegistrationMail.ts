import { sendMail } from "./sendMail";

export const sendBookingRegistrationMail = async (to: string, name?: string) => {
  return sendMail({
    to,
    name,
    subject: `Your Seat Booking Application Has Been Received - BTWAWI`,
    html: `
      <h2 style="color:#2c3e50;">Your Seat Booking Application Has Been Received</h2>
      <p>Dear ${name || "Applicant"},</p>
      <p>Thank you for your interest in attending the <strong>Business The Way Allaah Wants It</strong> (BTWAWI) event.</p>
      <p>We’ve successfully received your application to book a seat. Our team is currently reviewing your request, and you will receive a confirmation email once your application has been processed.</p>
      <p>If your application is successful, we’ll follow up with details about your seat reservation, event schedule, and further instructions.</p>
      <br/>
      <p style="margin: 0;">Best regards,</p>
      <p style="margin: 0;">BTWAWI Team</p>
      <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
    `,
  });
};
