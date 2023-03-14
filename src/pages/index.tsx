import { CoachSection } from "@/components/dataComponents/sections/coachSection";
import { DedicationSection } from "@/components/dataComponents/sections/dedicationSection";
import { FeatureSection } from "@/components/dataComponents/sections/featureSection";
import { IntroSection } from "@/components/dataComponents/sections/introSection";
import { SignUpSection } from "@/components/dataComponents/sections/signUpSection";
import { Layout } from "@/components/layout/layout";
import { Box, Container, Flex, Stack } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollIntoView: scrollToIntro, targetRef: introRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollToDedication, targetRef: dedicationRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView:scrollToFeature , targetRef: featureRef} = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollToCoach, targetRef: coachRef} = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollToSignUp, targetRef: signUpRef} = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  return (
    <>
      <Layout scrollTo={{dedication: scrollToDedication}}>
        <Container
          fluid
          sx={(theme) => ({
            paddingLeft: `calc(${theme.spacing.lg} * 4)`,
            paddingRight: `calc(${theme.spacing.lg} * 4)`,
            maxWidth: 1920,
            [theme.fn.smallerThan("sm")]: {
              padding: theme.spacing.lg,
            },
          })}
        >
          <Flex direction="column" gap={{ base: 70, sm: 200 }}>
            <Box ref={introRef}>
              <IntroSection />
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
      </Layout>
    </>
  );
}
