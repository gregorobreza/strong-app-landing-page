import {
  Handler,
  HandlerCallback,
  HandlerContext,
  HandlerEvent,
} from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import nodemailer from "nodemailer";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let data = JSON.parse(event.body || "");

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER || "",
    port: parseInt(process.env.SMTP_SERVER_PORT || "0"),
    auth: {
      user: process.env.SMTP_SERVER_USERNAME || "",
      pass: process.env.SMTP_SERVER_PASSWORD || "",
    },
  });
  const result = await transporter.sendMail({
    from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
    to: data.email,
    subject: `Sending with React, Nodemailer and Netlify`,
    html: `
        <h3>Email from BUREK<h3>`,
  });

  console.log("burek", result);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email Send" }),
  };
};

export { handler };
