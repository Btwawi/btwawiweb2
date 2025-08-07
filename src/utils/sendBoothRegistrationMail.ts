import { sendMail } from "./sendMail";

export const sendBoothApplicationMail = async (to: string, name?: string) => {
  return sendMail({
    to,
    name,
    subject: `Your Booth Application Has Been Received - BTWAWI`,
    html: `
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
  });
};

