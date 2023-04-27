import {
  unsubscribeNewsletters
} from "@/utils/googleSheets";
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { validate as uuidValidate } from 'uuid';

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let data: { emailUuid: string } = JSON.parse(event.body || "");

  if(!uuidValidate(data.emailUuid)){
    return {
      statusCode: 503,
      body: JSON.stringify({ message: "User not valid" }),
    };
  }

  try {
    await unsubscribeNewsletters(data.emailUuid);
  } catch (error) {
    console.error(error);
  }

  // try {
  //   await mailTransporter.sendMail({
  //     from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
  //     to: "signups@barbelllogbook.com",
  //     subject: `Another sign up!`,
  //     html: `<div>${data.formValues.email} just signed up! with uuid ${data.emailUuid}</div>`,
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     statusCode: 503,
  //     body: JSON.stringify({
  //       message:
  //         "Uh-oh, looks like a technical glitch. Please try again later.",
  //     }),
  //   };
  // }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Unsubscribed" }),
  };
};

export { handler };
