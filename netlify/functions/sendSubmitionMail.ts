import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  //   let data = JSON.parse(event.body || "");

  //   console.log(data)

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER || "",
    port: parseInt(process.env.SMTP_SERVER_PORT || "0"),
    auth: {
      user: process.env.SMTP_SERVER_USERNAME || "",
      pass: process.env.SMTP_SERVER_PASSWORD || "",
    },
  });
  const neki = await transporter.sendMail({
    from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
    to: "gobreza@gmail.com",
    subject: `Sending with React, Nodemailer and Netlify`,
    html: `
        <h3>Email from BUREK<h3>`,
  });

  console.log(neki);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Message send to " }),
  };
};

export { handler };
