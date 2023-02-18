import {
  FeatureContainer,
  IFeatureBox,
} from "@/components/styledComponents/features/featureContainer";
import { Carousel } from "@mantine/carousel";
import {
  IconChartLine,
  IconDental,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconListDetails,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';

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
    const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
      slideSize="20%"
      slideGap="xl"
      loop
      align="center"
      slidesToScroll={1}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      breakpoints={[
        { maxWidth: 'md', slideSize: '40%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
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
  );
}
