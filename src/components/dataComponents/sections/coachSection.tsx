import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import {
  IconWithText,
  IIconWithText,
} from "@/components/styledComponents/infographics/iconWithText";
import {
  SectionText,
  SectionTextContainer,
  SectionTitle,
} from "@/components/styledComponents/typography/sectionTypography";
import { Flex, Grid, Space, Stack, Text } from "@mantine/core";
import { IconCheckupList } from "@tabler/icons-react";

const coachFeatures: IIconWithText[] = [
  { Icon: IconCheckupList, text: "Manage multiple athletes with one platform" },
  { Icon: IconCheckupList, text: "Desktop Web app for easier program editing" },
  {
    Icon: IconCheckupList,
    text: "Simple program editing based on athletes goals and needs",
  },
  {
    Icon: IconCheckupList,
    text: "Advanced analytics and real-time monitoring",
  },
  {
    Icon: IconCheckupList,
    text: "Track all factors that may affect athletes performance with simple questionnaires",
  },
  {
    Icon: IconCheckupList,
    text: "Data-driven insights to help coaches make informed decisions",
  },
  { Icon: IconCheckupList, text: "Comment on finished workouts" },
  { Icon: IconCheckupList, text: "Video sharing for form reviewing " },
];

export function CoachSection(): JSX.Element {
  return (
    <Grid justify="center" align="center">
      <Grid.Col span={12} lg={6} orderLg={2}>
        <Flex
          gap={{ base: "xl", sm: "xl" }}
          justify={{ base: "center", md: "flex-start" }}
          align={{ base: "center", md: "flex-start" }}
          direction="column"
        >
          <SectionTitle>ARE YOU STRENGTH COACH? TRANSFORM YOUR STRENGTH COACHING!</SectionTitle>
          <SectionText
            sx={(theme) => ({
              paddingTop: 20,
              paddingBottom: 20,
              [theme.fn.smallerThan("md")]: {
                paddingTop: 0,
              },
            })}
          >
            Manage all aspects of strength training for your athletes like never
            before.
          </SectionText>
          <SectionTextContainer>
            <Stack
              px={{ base: 0, sm: "md" }}
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  gap: theme.spacing.lg,
                },
              })}

            >
              {coachFeatures.map((value, index) => (
                <IconWithText key={index} Icon={value.Icon} text={value.text} />
              ))}
            </Stack>
          </SectionTextContainer>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12} lg={6} orderLg={1} pt={{ base: "xl", lg: 0 }}>
        <ImageAndTitle
          imgSrc={"/images/coach.jpg"}
          imgAlt={"Man with vision"}
          title={"results\nprofessional"}
        />
      </Grid.Col>
    </Grid>
  );
}
