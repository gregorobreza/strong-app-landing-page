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
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Image } from "@mantine/core";
import { MobileDrawer } from "../styledComponents/mobileComponents/mobileMenu";

export const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: `calc(${theme.spacing.lg} * 4)`,
    marginRight: `calc(${theme.spacing.lg} * 4)`,
    [theme.fn.smallerThan("md")]: {
      marginLeft: theme.spacing.lg,
      marginRight: theme.spacing.lg,
    },
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
  mobileLink: {
    display: "block",
    lineHeight: 1,
    padding: "10px 12px",
    borderRadius: theme.radius.md,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.grayf[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.xl,
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

export type SectionName =
  | "dedication"
  | "intro"
  | "features"
  | "coach"
  | "signUp";

export interface HeaderActionProps {
  links: {
    setionName: SectionName;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export interface scrollToProps {
  dedication: any;
  intro: any;
  features: any;
  coach: any;
  signUp: any;
}

export function HeaderAction({
  links,
  scrollTo,
}: {
  links: HeaderActionProps;
  scrollTo: Record<SectionName, any>;
}) {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = links.links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover">
          <Menu.Target>
            <a
              href={link.setionName}
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
      <UnstyledButton
        key={link.label}
        onClick={() => {
          scrollTo[link.setionName]();
          close();
        }}
        className={classes.link}
      >
        {link.label}
      </UnstyledButton>
    );
  });

  const mobileItems = links.links.map((link) => {
    return (
      <UnstyledButton
        key={link.label}
        onClick={() => {
          scrollTo[link.setionName]();
          close();
        }}
        className={classes.mobileLink}
      >
        {link.label}
      </UnstyledButton>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0, backgroundColor: "#202123" }}
      mb={{ base: 40, sm: 60 }}
      fixed={true}
    >
      <MobileDrawer opened={opened} close={close} >
        <Stack align="center" pt={50}>
        {mobileItems}
        <Button size="md" radius="xl" onClick={() => {scrollTo.signUp(); close();}}>
            Get early access
          </Button>
        </Stack>
      </MobileDrawer>
      <Container className={classes.inner} fluid>
        <UnstyledButton component="a" href="/">
          <Image src="/strongman.svg" alt="Barbell logbook logo" width={65} height={65} />
        </UnstyledButton>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <Button radius="xl" onClick={() => scrollTo.signUp()}>
            Get early access
          </Button>
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
