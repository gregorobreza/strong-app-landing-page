import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_SERVER || "" ,
  port: parseInt(process.env.SMTP_SERVER_PORT || "0"),
  secure: false,
  auth: {
    user: process.env.SMTP_SERVER_USERNAME || "",
    pass: process.env.SMTP_SERVER_PASSWORD || "",
  },
}

console.log(smtpOptions)

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_SERVER_EMAIL_ADDRESS,
    ...data,
  })
}
