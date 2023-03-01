import { CoachSection } from "@/components/dataComponents/sections/coachSection";
import { DedicationSection } from "@/components/dataComponents/sections/dedicationSection";
import { FeatureSection } from "@/components/dataComponents/sections/featureSection";
import { IntroSection } from "@/components/dataComponents/sections/introSection";
import { SignUpSection } from "@/components/dataComponents/sections/signUpSection";
import { Layout } from "@/components/layout/layout";
import { Container, Flex, Stack } from "@mantine/core";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Container
          fluid
          sx={(theme) => ({
            paddingLeft: theme.spacing.lg * 4,
            paddingRight: theme.spacing.lg * 4,
            maxWidth: 1920,
            [theme.fn.smallerThan("sm")]: {
              padding: theme.spacing.lg,
            },
          })}
        >
          <Flex direction="column"  gap={{base: 70, sm: 200}}>
            <IntroSection/>
            <DedicationSection/>
            <FeatureSection/>
            <CoachSection/>
            <SignUpSection/>
          </Flex>
        </Container>
      </Layout>
    </>
  );
}
