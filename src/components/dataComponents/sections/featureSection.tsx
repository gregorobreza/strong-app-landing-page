import {
  FeatureContainer,
  IFeatureBox
} from "@/components/styledComponents/features/featureContainer";
import {
  SectionTitle
} from "@/components/styledComponents/typography/sectionTypography";
import { Carousel, Embla } from "@mantine/carousel";
import { Button, Stack } from "@mantine/core";
import {
  IconChartLine,
  IconDental,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconListDetails,
  IconMessageCircle
} from "@tabler/icons-react";
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState } from "react";

const slides: IFeatureBox[] = [
  {
    Icon: IconDeviceDesktop,
    title: "Desktop friendly",
    text: "For easier program planning and easier progress analyzing you can use  desktop web app.",
  },
  {
    Icon: IconChartLine,
    title: "Advanced analytics",
    text: "Analyze your training,  progress and  factors that may effect your training. Figure out what works best for you!",
  },
  {
    Icon: IconListDetails,
    title: "Simple program planning",
    text: "No more confusing data sheets. Simple program editing and Personal exercises database.",
  },
  {
    Icon: IconDeviceMobile,
    title: "Mobile friendly",
    text: "Track your workouts in the gym trough your phone. Add comments and record your form for later analyzing.",
  },
  {
    Icon: IconMessageCircle,
    title: "Comunicate with your coach",
    text: "Share workouts, videos and progress with your strength coach and achieve your goals and potential faster!",
  },
  {
    Icon: IconDental,
    title: "Strength focus",
    text: "RPE/RIR, percentage, rep or interval based workouts we got you. Your job is to focus and keep getting stronger.",
  },
];

export function FeatureSection(): JSX.Element {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const [embla, setEmbla] = useState<Embla | null>(null);

    
  return (
    <Stack spacing="lg">
    <SectionTitle sx={{whiteSpace: "pre-line"}}>EVERYTHING YOU NEED,{"\n"} ALL IN ONE PLACE</SectionTitle>
   {/* <Button onClick={() => embla?.scrollNext()}>burek</Button> */}
    <Carousel
      slideSize="20%"
      slideGap="xl"
      loop
      align="center"
      slidesToScroll={1}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      getEmblaApi={setEmbla}
      withControls={false}
      breakpoints={[
        { maxWidth: 1650, slideSize: '25%' },
        { maxWidth: 1400, slideSize: '33.33333333%' },
        { maxWidth: 'md', slideSize: '50%'},
        { maxWidth: 'sm', slideSize: '100%'},
      ]}
    >
      {slides.map((value, index) => (
        <Carousel.Slide key={index}>
          <FeatureContainer
            Icon={value.Icon}
            title={value.title}
            text={value.text}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
    </Stack>
  );
}
