
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
    scale: 0.5,
    opacity:0
  },
  onscreen: {
    x: 0,
    scale: 1,
    opacity:1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.7,
      delay: 0.7
    }
  }
};

const useStyles = createStyles((theme, numOfWords:number) => ({
  title: {
    fontWeight: 700,
    fontSize: 110,
    width: 110 * 1.2 * numOfWords,
    lineHeight: 1.2,
    color: theme.fn.rgba(theme.colors.dark[0], 0.08),
    writingMode: "vertical-lr",
    whiteSpace: "pre-line",
    transform: "rotate(180deg)",
    fontFamily: "Oswald, sans-serif",
    position: "relative",
    [theme.fn.smallerThan("md")]: {
      fontSize: 80,
      width: 80 * 1.2 * numOfWords,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 70,
      width: 70 * 1.2* numOfWords,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 45,
      width: 45 * 1.2* numOfWords,
    },
  },
  container: {},
}));

export function ImageAndTitle({
  imgSrc,
  imgAlt,
  title,
}: ImgWTtitleProps): JSX.Element {
  const { classes } = useStyles(title.split("\n").length);
  return (
    <Flex
      gap={0}
      justify="center"
      align="flex-end"
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
        <motion.div  variants={cardVariants} >
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
