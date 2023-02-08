import {
  createStyles,
  TextProps,
  Title,
  TitleProps,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 52,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },
  text: {
    fontSize: theme.fontSizes.lg,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));

export function SectionTitle({ children, ...props }: TitleProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Title order={2} {...props} className={classes.title}>
      {children}
    </Title>
  );
}

export function SectionText({ children, ...props }: TextProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Text fw={700} {...props} className={classes.text}>
      {children}
    </Text>
  );
}
