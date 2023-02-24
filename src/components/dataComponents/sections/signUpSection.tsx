import { SignUpForm } from "@/components/forms/signUpForm";
import { SignUpLayout } from "@/components/styledComponents/signUp/signUpLayout";
import { SectionText } from "@/components/styledComponents/typography/sectionTypography";
import { Flex, MediaQuery, Stack } from "@mantine/core";

export function SignUpSection(): JSX.Element {
  const LeftSection = (): JSX.Element => (
    <Flex m={50} direction="column" justify="space-between" gap="xl">
      <SectionText>
        Unlock a world of improved strength training with exclusive access to
        our new platform. Be the first to try it out, free of charge. Simply
        fill out the form to be notified when the beta version is released, and
        start your journey to a stronger you.
      </SectionText>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <div>
          <SectionText>
            *Be a part of shaping the future of strength training by joining our
            survey program. With just a few occasional, simple questionnaires
            sent directly to your email, you&apos;ll have the opportunity to
            share your thoughts on what you want and need from current solutions
            on the market. And don&apos;t worry, we respect your time and
            won&apos;t send any unwanted emails. You can opt-out at any time.
          </SectionText>
        </div>
      </MediaQuery>
    </Flex>
  );
  const BottomSection = (): JSX.Element => (
    <Flex m={50} direction="column" justify="space-between" gap="xl">
      <SectionText>
        *Be a part of shaping the future of strength training by joining our
        survey program. With just a few occasional, simple questionnaires sent
        directly to your email, you&apos;ll have the opportunity to share your
        thoughts on what you want and need from current solutions on the market.
        And don&apos;t worry, we respect your time and won&apos;t send any
        unwanted emails. You can opt-out at any time.
      </SectionText>
    </Flex>
  );

  return (
    <SignUpLayout
      leftSection={<LeftSection />}
      rightSection={<SignUpForm />}
      bottomSectionMobile={<BottomSection />}
    />
  );
}
