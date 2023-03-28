
import { createStyles, Flex, Image, Text } from "@mantine/core";
import { motion, Variants } from "framer-motion";

interface ImgWTtitleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export const cardVariants: Variants = {
  offscreen: {
    x: 300,
    scale: 0.5
  },
  onscreen: {
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.7,
      delay: 0.7
    }
  }
};

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 110,
    color: theme.fn.rgba(theme.colors.dark[0], 0.08),
    lineHeight: 1.2,
    writingMode: "vertical-lr",
    whiteSpace: "pre-line",
    transform: "rotate(180deg)",
    fontFamily: "Oswald, sans-serif",
    // fontFamily: "Roboto Condensed, sans-serif",
    [theme.fn.smallerThan("md")]: {
      fontSize: 80,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 70,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 45,
    },
  },
  container: {},
}));

export function ImageAndTitle({
  imgSrc,
  imgAlt,
  title,
}: ImgWTtitleProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Flex
      gap={0}
      justify="center"
      align="center"
      direction="row"
      wrap="nowrap"
      className={classes.container}
    >
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card" variants={cardVariants}>
        <Text className={classes.title} tt="uppercase">
          {title}
        </Text>
        </motion.div>
      </motion.div>
      <div style={{ minWidth: 180 }}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          styles={(theme) => ({
            image: {
              borderRadius: 25,

              [theme.fn.smallerThan("sm")]: {
                borderRadius: 15,
              },
            },
          })}
        />
      </div>
    </Flex>
  );
}
