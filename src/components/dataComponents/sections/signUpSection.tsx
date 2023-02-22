import { SignUpForm } from "@/components/forms/signUpForm";
import { SignUpLayout } from "@/components/styledComponents/signUp/signUpLayout";

export function SignUpSection():JSX.Element{



    const LeftSection = ():JSX.Element => (
        <>burek</>
    )

    return(
        <SignUpLayout leftSection={<LeftSection/>} rightSection={<SignUpForm/>}/>
    )
}