import { CoachSection } from "@/components/dataComponents/sections/coachSection";
import { DedicationSection } from "@/components/dataComponents/sections/dedicationSection";
import { IntroSection } from "@/components/dataComponents/sections/introSection";
import { Layout } from "@/components/layout/layout";
import { Container, Stack } from "@mantine/core";
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
          <Stack spacing={100}>
            <IntroSection/>
            <DedicationSection/>
            <CoachSection/>
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
