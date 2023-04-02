import { SignUpForm } from "@/components/forms/signUpForm";
import { SignUpLayout } from "@/components/styledComponents/signUp/signUpLayout";
import { SectionText } from "@/components/styledComponents/typography/sectionTypography";
import { Flex, MediaQuery, Stack, Image } from "@mantine/core";

export function SignUpSection(): JSX.Element {
  const LeftSection = (): JSX.Element => (
    <Flex
      m={{ base: 30, sm: 70 }}
      direction="column"
      justify="space-between"
      gap={30}
    >
      <SectionText>
        Unlock a world of improved strength training with exclusive access to
        our new platform. Be the first to try it out, free of charge. Simply
        fill out the form to be notified when the beta version is released, and
        start your journey to a stronger you.
      </SectionText>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Image
          src="/strongman.svg"
          alt="Barbell logbook logo"
          width={200}
          height={200}
          sx={{ alignSelf: "center" }}
        />
      </MediaQuery>
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
    <Flex
      m={{ base: 30, sm: 70 }}
      direction="column"
      justify="space-between"
      gap="xl"
    >
      <SectionText>
        *Be a part of shaping the future of strength training by joining our
        survey program. With just a few occasional, simple questionnaires sent
        directly to your email, you&apos;ll have the opportunity to share your
        thoughts on what you want and need from current solutions on the market.
        And don&apos;t worry, we respect your time and won&apos;t send any
        unwanted emails. You can opt-out at any time. We appreciate your help!
      </SectionText>
      <Image
        src="/strongman.svg"
        alt="Barbell logbook logo"
        width={200}
        height={200}
        sx={{ alignSelf: "center" }}
      />
    </Flex>
  );

  return (
    <SignUpLayout
      leftSection={<LeftSection />}
      rightSection={<SignUpForm />}
      bottomSectionMobile={<BottomSection />}
      sectionBigTitle={"ACHIEVE YOUR GOALS"}
    />
  );
}
