import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import axios from "axios";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
 
  const data: {response:string} = JSON.parse(event.body || "")
  const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY

  let response
  try {
    response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
      response: data.response,
      secret: secret,
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  } catch (error) {
    console.error(error);
    return{
      statusCode: 404,
      body: JSON.stringify({ message: "recaptcha verification failed"}),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "recaptcha verification",redata: response?.data }),
  };
};

export { handler };
