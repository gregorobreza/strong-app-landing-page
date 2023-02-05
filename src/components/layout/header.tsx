import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Image } from "@mantine/core";

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing.lg,
    marginRight: theme.spacing.lg,
    [theme.fn.smallerThan("sm")]: {
      margin: 0,
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.md,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.grayf[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <UnstyledButton component="a" href="/">
          <Image src="/strongman.svg" alt="Strong app logo" width={50} />
        </UnstyledButton>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <Button radius="lg">Get early access</Button>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="md"
          />
        </Group>
      </Container>
    </Header>
  );
}
