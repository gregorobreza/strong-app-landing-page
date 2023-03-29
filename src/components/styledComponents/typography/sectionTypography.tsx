import {
  createStyles,
  TextProps,
  Title,
  TitleProps,
  Text,
  Container,
} from "@mantine/core";
import { motion, Variants } from "framer-motion";

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
  bigTitle: {
    fontWeight: 700,
    fontSize: 110,
    color: theme.fn.rgba(theme.colors.dark[0], 0.08),
    lineHeight: 1.2,
    [theme.fn.smallerThan("md")]: {
      fontSize: 80,
      textAlign: "center",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 60,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 40,
    },
  },
}));

export const bigTitleVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.7,
      delay: 1
    }
  }
};

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
    <Text fw={500} {...props} className={classes.text}>
      {children}
    </Text>
  );
}

export function SectionTextContainer({
  children,
  ...props
}: TextProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Container
      p="xl"
      fluid
      sx={(theme) => ({
        backgroundColor: theme.fn.rgba("#ffffff", 0.05),
        borderRadius: theme.radius.lg,
      })}
    >
      <Text fw={500} {...props} className={classes.text}>
        {children}
      </Text>
    </Container>
  );
}

export function SectionBigTitle({
  children,
  ...props
}: TitleProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={bigTitleVariants}>
        <Title order={2} {...props} className={classes.bigTitle}>
          {children}
        </Title>
      </motion.div>
    </motion.div>
  );
}
