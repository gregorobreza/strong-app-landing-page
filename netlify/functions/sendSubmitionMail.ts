import { ISignUpForm } from "@/components/forms/signUpForm";
import { mailTransporter } from "@/utils/mail";
import { signUpHtml } from "@/utils/renderUtils";
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let data:{formValues:ISignUpForm, html: string} = JSON.parse(event.body || "");


  const costumer = await mailTransporter.sendMail({
    from: `Barbell Logbook <${process.env.SMTP_SERVER_EMAIL_ADDRESS}>`,
    to: data.formValues.email,
    subject: `Succesfully signed up!`,
    html: data.html,
  });

  mailTransporter.sendMail({
    from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
    to: "signups@barbelllogbook.com",
    subject: `Another sign up!`,
    html: `<div>${data.formValues.email} just signed up!</div>`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email Send" }),
  };
};

export { handler };
