import { createStyles, Flex, Group, Image, Text } from "@mantine/core";

interface ImgWTtitleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  imageWidth: number;
}

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 100,
    color: theme.fn.rgba(theme.colors.dark[0], 0.05),

    writingMode: "sideways-lr"
  },
  image: {},
  container: {

  },
}));

export function ImageAndTitle({
  imgSrc,
  imgAlt,
  title,
  imageWidth,
}: ImgWTtitleProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Flex
      gap={0}
      justify="flex-end"
      align="center"
      direction="row"
      wrap="nowrap"
      className={classes.container}
    >
      <Text className={classes.title} tt="uppercase">
        {title}
      </Text>
      <div>
        <Image
          className={classes.image}
          radius={25}
          src={imgSrc}
          alt={imgAlt}
          width={imageWidth}
        />
      </div>
    </Flex>
  );
}
