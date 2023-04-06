import {
  createStyles,
  Card,
  Group,
  Switch,
  Text,
  rem,
  Stack,
  Anchor,
  Button,
  Divider,
} from "@mantine/core";
import { useListState, useSetState } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { useState } from "react";
import { PrivacyPolicy } from "./privacyPolicy";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    body: {},
    "& *": {
      // cursor: "pointer",
      color: theme.white,
      borderColor: theme.white,
    },
  },

  title: {
    lineHeight: 1,
  },
}));

export interface SwitchesCardProps {
  data: {
    title: string;
    description: string;
    label: "essential" | "performance" | "social" | "advertising";
    disabled?: boolean;
  }[];
}

export function CookiesCard({ data }: SwitchesCardProps) {
  const { classes } = useStyles();

  const [state, setState] = useSetState({
    essential: true,
    performance: false,
    social: false,
    advertising: false
  });

  const items = data.map((item, index) => (
    <Group
      key={index}
      position="apart"
      className={classes.item}
      noWrap
      spacing="xl"
    >
      <div>
        <Text weight={700}>{item.title}</Text>
        <Text size="xs">{item.description}</Text>
      </div>
      <Switch
        onLabel="ON"
        offLabel="OFF"
        checked={state[item.label]}
        className={classes.switch}
        size="lg"
        disabled={item.disabled}
        onClick={(event) => setState({[item.label]: event.currentTarget.checked})}
      />
    </Group>
  ));

  return (
    <Stack>
        <Divider my="sm" />
      <Text size="sm">
        Welcome to our cookie preferences center! We want to make sure
        you&rsquo;re in control of your data and your browsing experience. You
        can choose which cookies to allow or block by clicking on the different
        categories below. For more information on cookies and how we use them,
        please review our{" "}
        <Anchor
          component="button"
          color="steelteal.6"
          onClick={() =>
            modals.open({
              title: "Privacy & Policy",
              children: (
                <>
                  <PrivacyPolicy />
                </>
              ),
              radius: "md",
              size: 800,
              overlayProps:{opacity: 0.5, blur: 4}
            })
          }
        >
          Privacy policy
        </Anchor>
        . Please note that blocking certain types of cookies may impact your
        experience on our website.
      </Text>
      <Divider my="sm" />
      <>{items}</>
      <Divider my="sm" />
      <Text size="sm">
        Please note that by clicking &rsquo;Save preferences&rsquo;, you agree
        to our use of cookies as outlined in our{" "}
        <Anchor
          component="button"
          color="steelteal.6"
          onClick={() =>
            modals.open({
              title: "Privacy & Policy",
              children: (
                <>
                  <PrivacyPolicy />
                </>
              ),
              radius: "md",
              size: 800,
              overlayProps:{opacity: 0.5, blur: 4}
            })
          }
        >
          Privacy policy
        </Anchor>
        . You can change your preferences at any time by clicking cookie button
        on the left bottom of the page.
      </Text>
      <Group grow>
        <Button
          onClick={() => modals.closeAll()}
          color="steelteal.6"
          variant="outline"
          radius="xl"
        >
          Cancel
        </Button>
        <Button onClick={() => console.log(state)} color="steelteal.6" radius="xl">
          Save preferences
        </Button>
      </Group>
    </Stack>
  );
}
