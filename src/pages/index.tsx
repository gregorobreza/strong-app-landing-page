import { IntroSection } from "@/components/dataComponents/sections/introSection";
import { Layout } from "@/components/layout/layout";
import { SectionTitle } from "@/components/styledComponents/titles/sectionTitle";
import { Container, Flex, Stack, Title } from "@mantine/core";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Container
          fluid
          sx={(theme) => ({
            marginLeft: theme.spacing.lg * 4,
            marginRight: theme.spacing.lg * 4,
          })}
        >
          <Stack>
            <IntroSection/>
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
