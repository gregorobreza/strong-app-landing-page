import { render } from "@react-email/render";
import SignUpEmail from "emails/signUpTemplate";

export const signUpHtml = (email: string, ) => (
    render(
      <SignUpEmail
        email={email}
        unsubscribeUrl={"https://barbelllogbook.com"}
        imageUrl={`https://barbelllogbook.com/strongman.png`}
      />
    )
  )