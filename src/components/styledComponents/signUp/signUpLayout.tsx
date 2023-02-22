import { SignUpForm } from "@/components/forms/signUpForm";
import { Box, createStyles, Grid } from "@mantine/core";


export interface ISignUpLayout{
    leftSection:JSX.Element,
    rightSection: JSX.Element,

}

const useStyles = createStyles((theme) => ({
    box:{
        borderRadius: theme.radius.lg,
        backgroundColor: theme.fn.rgba(theme.colors.steelteal[6], 0.15),
        
    },
    formSection:{
        borderRadius: theme.radius.lg,
        backgroundColor: theme.fn.rgba(theme.colors.grayf[0], 0.65),
        display: "flex",
        justifyContent: "center"
    }
  }));
  


export function SignUpLayout({leftSection, rightSection}: ISignUpLayout): JSX.Element {
    const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Grid m={0}>
        <Grid.Col span={6}>{leftSection}</Grid.Col>
        <Grid.Col className={classes.formSection} span={6}>{rightSection}</Grid.Col>
      </Grid>
    </Box>
  );
}
