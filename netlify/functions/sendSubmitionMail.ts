import { ISignUpForm } from "@/components/forms/signUpForm";
import { addSignUpToSpreadSheets } from "@/utils/googleSheets";
import { mailTransporter } from "@/utils/mail";
import { signUpHtml } from "@/utils/renderUtils";
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let data: { formValues: ISignUpForm; html: string } = JSON.parse(
    event.body || ""
  );

  try {
    const costumer = await mailTransporter.sendMail({
      from: `Barbell Logbook <${process.env.SMTP_SERVER_EMAIL_ADDRESS}>`,
      to: data.formValues.email,
      subject: `Welcome to Barbell Logbook's Early Bird Program, Strong Athlete or Coach!`,
      html: data.html,
    });
  } catch (error) {
    console.error(error);
    return {
      statusCode: 503,
      body: JSON.stringify({ message: "Uh-oh, looks like a technical glitch. Please try again later." }),
    };
  }

  try {
    await addSignUpToSpreadSheets(data.formValues);
  } catch (error) {
    console.error(error);
  }

  try {
    await mailTransporter.sendMail({
      from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
      to: "signups@barbelllogbook.com",
      subject: `Another sign up!`,
      html: `<div>${data.formValues.email} just signed up!</div>`,
    });
  } catch (error) {
    console.error(error);
    return {
      statusCode: 503,
      body: JSON.stringify({ message: "Uh-oh, looks like a technical glitch. Please try again later." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email Send" }),
  };
};

export { handler };
