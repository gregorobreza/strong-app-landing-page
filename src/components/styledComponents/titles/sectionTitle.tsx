import { createStyles, Title, TitleProps } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    title:{
        fontSize: 52
    }
    
}))

export function SectionTitle({ children, ...props }: TitleProps): JSX.Element {
    const {classes} = useStyles()
  return <Title order={2} {...props} className={classes.title}>{children}</Title>;
}
