import { render } from "@react-email/render";
import SignUpEmail from "emails/signUpTemplate";

export const signUpHtml = (email: string, uuid: string ) => (
    render(
      <SignUpEmail
        email={email}
        unsubscribeUrl={`https://barbelllogbook.com/newsletters/unsubscribe?costumer=${uuid}`}
        imageUrl={`https://barbelllogbook.com/strongman.png`}
      />
    )
  )