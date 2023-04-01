import { CoachSection } from "@/components/dataComponents/sections/coachSection";
import { DedicationSection } from "@/components/dataComponents/sections/dedicationSection";
import { FeatureSection } from "@/components/dataComponents/sections/featureSection";
import { IntroSection } from "@/components/dataComponents/sections/introSection";
import { SignUpSection } from "@/components/dataComponents/sections/signUpSection";
import { HEADER_HEIGHT } from "@/components/layout/header";
import { Layout } from "@/components/layout/layout";
import { CookieNotification } from "@/components/styledComponents/cookies/cookieNotification";
import { Box, Container, Flex, Stack } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollIntoView: scrollToIntro, targetRef: introRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
  });
  const { scrollIntoView: scrollToDedication, targetRef: dedicationRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
  });
  const { scrollIntoView:scrollToFeature , targetRef: featureRef} = useScrollIntoView<HTMLDivElement>({
    offset: 80,
  });
  const { scrollIntoView: scrollToCoach, targetRef: coachRef} = useScrollIntoView<HTMLDivElement>({
    offset: 80,
  });
  const { scrollIntoView: scrollToSignUp, targetRef: signUpRef} = useScrollIntoView<HTMLDivElement>({
    offset: 80,
  });
  return (
    <>
      <Layout scrollTo={{dedication: scrollToDedication, intro: scrollToIntro, features: scrollToFeature, coach: scrollToCoach, signUp: scrollToSignUp}}>
        <Container
          fluid
          sx={(theme) => ({
            paddingLeft: `calc(${theme.spacing.lg} * 4)`,
            paddingRight: `calc(${theme.spacing.lg} * 4)`,
            paddingTop: `calc(${theme.spacing.lg} * 4 + ${HEADER_HEIGHT}px)`,
            maxWidth: 1920,
            [theme.fn.smallerThan("sm")]: {
              padding: theme.spacing.lg,
              paddingTop: `calc(${theme.spacing.lg} + ${HEADER_HEIGHT}px)`,
            },
          })}
        >
          <Flex direction="column" gap={{ base: 70, sm: 200 }}>
            <Box ref={introRef}>
              <IntroSection scrollTo={{dedication: scrollToDedication,signUp: scrollToSignUp }} />
            </Box>
            <Box ref={dedicationRef}>
              <DedicationSection />
            </Box>
            <Box ref={featureRef}>
              <FeatureSection />
            </Box>
            <Box ref={coachRef}>
              <CoachSection />
            </Box>
            <Box ref={signUpRef}>
              <SignUpSection />
            </Box>
          </Flex>
        

        </Container>
        <CookieNotification/>
      </Layout>
      
    </>
  );
}
