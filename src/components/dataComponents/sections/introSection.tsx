import { SectionName } from "@/components/layout/header";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/styledComponents/buttons/mainButtons";
import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import {
  SectionText,
  SectionTitle,
} from "@/components/styledComponents/typography/sectionTypography";
import { Flex, Grid, Group, MediaQuery } from "@mantine/core";

export function IntroSection({scrollTo}: {scrollTo: Record<"dedication" | "signUp", any>}): JSX.Element {
  return (
    <Grid justify="center" align="center" gutter="lg">
      <Grid.Col span={12} md={5}>
        <Flex
          gap={{ base: "xl", sm: "xl" }}
          justify={{ base: "center", md: "flex-start" }}
          align={{ base: "center", md: "flex-start" }}
          direction="column"
        >
          <SectionTitle>MANAGE ALL ASPECTS OF STRENGTH TRAINING</SectionTitle>
          <SectionText
            sx={(theme) => ({
              paddingTop: 20,
              paddingBottom: 20,
              [theme.fn.smallerThan("md")]: {
                paddingTop: 0,
                paddingBottom: 40,
              },
            })}
          >
            Strength training app for tracking custom workout plans, records
            exercises, and shows progress analytics.
          </SectionText>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group position="center" pt={10}>
              <PrimaryButton onClick={()=> scrollTo.signUp()}>Get early access</PrimaryButton>
              <SecondaryButton onClick={()=> scrollTo.dedication()}>Tell me more</SecondaryButton>
            </Group>
          </MediaQuery>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12} md={7}>
        <ImageAndTitle
          imgSrc={"/images/man_squats_2.jpg"}
          imgAlt={"Man squating"}
          title={"strength"}
        />
      </Grid.Col>
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Grid.Col span={12} md={7}>
          <Group position="center" pt="xl">
            <PrimaryButton>Get early access</PrimaryButton>
            <SecondaryButton>Tell me more</SecondaryButton>
          </Group>
        </Grid.Col>
      </MediaQuery>
    </Grid>
  );
}
