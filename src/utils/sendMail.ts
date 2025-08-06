import { transporter } from "./mailService";

export const sendBusinessGrantMail = async (to: string) => {
  const mailOptions = {
    from: '"BTWAWI" <info@btwawi.com>',
    to,
    subject: "Your Business Grant Application Has Been Received - BTWAWI",
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
  };

  try {
    const info = transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Successfully sent', info)
    })
    return info;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

export const sendNominationMail = async (to: string) => {
  const mailOptions = {
    from: "BTWAWI <info@btwawi.com",
    to,
    subject: "Your Business Nomination Has Been Received – BTWAWI",
    html: `
          <h2 style="color: #2c3e50;">Thank You for Your Nomination</h2>
          <p>We’ve received your nomination to spotlight a business as part of the <strong>Business The Way Allaah Wants It (BTWAWI)</strong> initiative.</p>
          <p>Our team will review the nominated business and follow up as necessary.</p>
          <p>Thank you for taking a step toward promoting business values that align with Islamic principles.</p>
          <br/>
          <p style="margin: 0;">Warm regards,</p>
          <p style="margin: 0;">BTWAWI Team</p>
          <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply to this email.</p>
        `,
  };

  try {
    const info = transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log("Successfully sent", info)
    })
    
    return info;
  } catch (error) {
    console.log("Failed to send email", error);
    throw error;
  }
}