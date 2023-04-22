import { StrongFooterProps } from "@/staticData/footerLinks";
import { ActionIcon, Anchor, createStyles, Group, px, Text } from "@mantine/core";
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import dayjs from "dayjs";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    backgroundColor: theme.fn.rgba(theme.colors.steelteal[6], 0.15),
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    marginLeft: `calc(${theme.spacing.lg} * 4)`,
    marginRight: `calc(${theme.spacing.lg} * 4)`,
    [theme.fn.smallerThan("md")]: {
        marginLeft: theme.spacing.lg,
        marginRight: theme.spacing.lg,
      },
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      margin: 0,
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
  },
}));

export function StrongFooter({ links, scrollTo }: StrongFooterProps) {
  const { classes } = useStyles();
  const currentYear = dayjs().year();
  const items = links.map((link) => (
    <Anchor
      component="button"
      key={link.label}
      sx={(theme) => ({ lineHeight: 1, color: theme.colors.dark[0] })}
      onClick={(event) => link.sectionName ? scrollTo[link.sectionName]() : link.onClick ? link.onClick() : event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <Text  size="sm">
          © {currentYear} Barbell Logbook - All rights reserved.
        </Text>

        <Group spacing="xs" position="right" noWrap className={classes.links}> 
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Group >{items}</Group>
      </div>
    </div>
  );
}
