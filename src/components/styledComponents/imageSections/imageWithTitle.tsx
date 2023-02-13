import { createStyles, Flex, Group, Image, Text } from "@mantine/core";

interface ImgWTtitleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 110,
    color: theme.fn.rgba(theme.colors.dark[0], 0.05),
    lineHeight:1.2,
    writingMode: "sideways-lr",
    [theme.fn.smallerThan("md")]: {
      fontSize: 80,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 60,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 40,
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
      <Text className={classes.title} tt="uppercase">
        {title}
      </Text>
      <div style={{minWidth: 180}}>
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
