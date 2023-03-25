import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: process.env.SMTP_SERVER || "",
    port: parseInt(process.env.SMTP_SERVER_PORT || "0"),
    auth: {
      user: process.env.SMTP_SERVER_EMAIL_ADDRESS || "",
      pass: process.env.SMTP_SERVER_PASSWORD || "",
    },
  });