import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/styledComponents/buttons/mainButtons";
import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import {
  SectionText,
  SectionTitle,
} from "@/components/styledComponents/typography/sectionTypography";
import { Button, Flex, Grid, Group, Stack, Text } from "@mantine/core";

export function IntroSection(): JSX.Element {
  return (
    <Grid justify="center" align="center">
      <Grid.Col span={12} md={5}>
        <Flex
          gap={{base:"md", sm: "xl"}}
          justify={{base: "center", md:"flex-start"}}
          align={{base: "center", md:"flex-start"}}
          direction="column"
        >
          <SectionTitle>MANAGE ALL ASPECTS OF STRENGTH TRAINING</SectionTitle>
          <SectionText>
            Strength training app for tracking custom workout plans, records
            exercises, and shows progress analytics.
          </SectionText>
          <Group  position="center">
            <PrimaryButton>Get early access</PrimaryButton>
            <SecondaryButton>Tell me more</SecondaryButton>
          </Group>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12} md={7}>
        <ImageAndTitle
          imgSrc={"/images/man_squats.jpg"}
          imgAlt={"Man squating"}
          title={"strength"}
          imageWidth={560}
        />
      </Grid.Col>
    </Grid>
  );
}
