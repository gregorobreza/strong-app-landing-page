import { useTheme } from "@emotion/react";
import { Button, ButtonProps, createStyles, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  primaryButton: {
    root: {
      background: theme.colors.cyan[3],
    },
  },
  secondaryButton: {},
}));

export function PrimaryButton(props: ButtonProps): JSX.Element {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  const mediumScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md}px`);
  return (
    <Button
      radius="xl"
      size={mediumScreen ? "lg" : "md"}
      styles={(theme) => ({
        // root: {
        //   backgroundColor: theme.colors.steelteal[6],
        // },
      })}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export function SecondaryButton(props: ButtonProps): JSX.Element {
  const theme = useMantineTheme()
  const mediumScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md}px`);
  return (
    <Button
      radius="xl"
      size={mediumScreen ? "lg" : "md"}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.steelteal[6],
          "&:hover":{
            backgroundColor: theme.colors.steelteal[8],
          }
        },
      })}
      {...props}
    >
      {props.children}
    </Button>
  );
}
