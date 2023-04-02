import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/styledComponents/buttons/mainButtons";
import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import {
  SectionText,
  SectionTitle,
} from "@/components/styledComponents/typography/sectionTypography";
import { Button, Flex, Grid, Group, Image, MediaQuery } from "@mantine/core";

export function IntroSection({
  scrollTo,
}: {
  scrollTo: Record<"dedication" | "signUp", any>;
}): JSX.Element {
  return (
    <Grid justify="center" align="center" gutter="lg">
      <Grid.Col span={12} md={5}>
        <Flex
          gap={{ base: "lg", sm: "lg" }}
          justify={{ base: "center", md: "flex-start" }}
          align={{ base: "center", md: "flex-start" }}
          direction="column"
        >
          <SectionTitle>MANAGE ALL ASPECTS OF STRENGTH TRAINING</SectionTitle>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Image
          src="/strongman.svg"
          alt="Barbell logbook logo"
          width={140}
          height={140}
          sx={(theme) => ({
            alignSelf: "center",
          })}
        />
      </MediaQuery>
          <Group noWrap spacing={40} sx={{alignItems: "flex-start"}}>
            
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Image
                src="/strongman.svg"
                alt="Barbell logbook logo"
                width={160}
                height={160}
                sx={{ alignSelf: "center" }}
              />
            </MediaQuery>
            <SectionText
              sx={(theme) => ({
                paddingTop: 20,
                paddingBottom: theme.spacing.sm,
                [theme.fn.smallerThan("md")]: {
                  paddingTop: 0,
                  paddingBottom: 40,
                },
              })}
            >
              Strength training app for tracking custom workout plans, records
              exercises, and shows progress analytics.
            </SectionText>
          </Group>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group pt={10} grow sx={{ width: "100%" }}>
              <Button radius="xl" size="md" onClick={() => scrollTo.signUp()}>
                Get early access
              </Button>
              <Button
                size="md"
                radius="xl"
                color="steelteal.6"
                onClick={() => scrollTo.dedication()}
              >
                Tell me more
              </Button>
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
            <PrimaryButton onClick={() => scrollTo.signUp()}>
              Get early access
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollTo.dedication()}>
              Tell me more
            </SecondaryButton>
          </Group>
        </Grid.Col>
      </MediaQuery>
      
    </Grid>
  );
}
