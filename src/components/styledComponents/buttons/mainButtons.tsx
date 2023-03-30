import { useTheme } from "@emotion/react";
import {
  Button,
  ButtonProps,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  primaryButton: {
    root: {
      background: theme.colors.cyan[3],
    },
  },
  secondaryButton: {},
}));

interface IButtonProps {
  onClick?: () => void;
  isLoading?: boolean
}

export function PrimaryButton({onClick, isLoading, ...props}:  IButtonProps & ButtonProps): JSX.Element {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mediumScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md}px`);
  return (
    <Button
      radius="xl"
      loading={isLoading}
      size={mediumScreen ? "lg" : "md"}
      onClick={(event) => onClick ? onClick() : event.preventDefault()}
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

export function SecondaryButton({onClick, ...props}:  IButtonProps & ButtonProps): JSX.Element {
  const theme = useMantineTheme();
  const mediumScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md}px`);
  return (
    <Button
      radius="xl"
      size={mediumScreen ? "lg" : "md"}
      onClick={(event) => onClick ? onClick() : event.preventDefault()}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.steelteal[6],
          '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.colors.steelteal[8],
          }),
        },
      })}
      {...props}
    >
      {props.children}
    </Button>
  );
}
