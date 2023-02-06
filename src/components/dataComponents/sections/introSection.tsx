import { ImageAndTitle } from "@/components/styledComponents/imageSections/imageWithTitle";
import { SectionTitle } from "@/components/styledComponents/titles/sectionTitle";
import { Flex, Stack } from "@mantine/core";

export function IntroSection(): JSX.Element {
  return (
    <Flex  direction={{ base: 'column', md: 'row' }} align="flex-start" justify="apart">
      <Stack >
        <SectionTitle>MANAGE ALL ASPECTS OF STRENGTH TRAINING</SectionTitle>
      </Stack>
      <ImageAndTitle
              imgSrc={"/images/man_squats.jpg"}
              imgAlt={"Man squating"}
              title={"strength"} imageWidth={560}      />
    </Flex>
  );
}
