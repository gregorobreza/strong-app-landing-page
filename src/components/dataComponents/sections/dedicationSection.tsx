import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/styledComponents/buttons/mainButtons";
import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import {
  SectionText,
  SectionTextContainer,
  SectionTitle,
} from "@/components/styledComponents/typography/sectionTypography";
import { Flex, Grid, Group, MediaQuery, Space, Text } from "@mantine/core";

export function DedicationSection(): JSX.Element {
  return (
    <Grid justify="center" align="center" >
      <Grid.Col span={12} lg={6} orderLg={2}>
        <Flex
          gap={{ base: "xl", sm: "xl" }}
          justify={{ base: "center", md: "flex-start" }}
          align={{ base: "center", md: "flex-start" }}
          direction="column"
        >
          <SectionTitle>
            ULTIMATE STRENGTH PLATFORM FOR STRENGTH{" "}
            <Text span inherit td="underline">
              ATHLETES
            </Text>{" "}
            AND STRENGTH{" "}
            <Text span inherit td="underline">
              COACHES
            </Text>
          </SectionTitle>
          <SectionTextContainer>
            <Text sx={{fontSize: "current"}}>
              If you&apos;re a strength athlete looking to take your training to
              the next level or a strength coach seeking to professionally
              manage your clients and help them get stronger, you&apos;ve come
              to the right place!
            </Text>
            <Space h="md" />
            <Text size={16}>
              Say goodbye to mediocre fitness apps and confusing data sheets
              that are difficult to navigate and edit during critical workout
              moments. Our focus is on the one thing that matters most: GETTING
              STRONGER.
            </Text>
          </SectionTextContainer>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12} lg={6} orderLg={1} pt={{base: "xl", lg:0}}>
        <ImageAndTitle
          imgSrc={"/images/dedication.jpg"}
          imgAlt={"Man with muscular back"}
          title={"dedication"}
        />
      </Grid.Col>
    </Grid>
  );
}
