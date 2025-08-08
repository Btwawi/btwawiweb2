import { sendMail } from './sendMail';

export const sendBusinessGrantMail = async (to: string, name?: string) => {
    return sendMail({
      to,
      name,
      subject: `Your Business Grant Application Has Been Received - BTWAWI`,
      html: `
            <h2 style="color:#2c3e50;">Thank You for Applying for the BTWAWI Business Grant</h2>
            <p>We’ve successfully received your application for the <strong>Business The Way Allaah Wants It</strong> grant program.</p>
            <p>Our team will carefully review your submission. If your application meets the criteria, we will contact you with the next steps.</p>
            <p>We appreciate your interest and commitment to doing business in a way that aligns with Islamic principles.</p>
            <br/>
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0;">BTWAWI Team</p>
            <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
            `,
    });
}