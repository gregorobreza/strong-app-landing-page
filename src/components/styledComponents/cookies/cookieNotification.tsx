import { CookiesCard } from "@/components/dataComponents/formal/cookiesModal";
import { PrivacyPolicy } from "@/components/dataComponents/formal/privacyPolicy";
import { cookieData } from "@/staticData/cookieData";
import {
  Affix,
  Button,
  Drawer,
  Flex,
  Notification,
  rem,
  Stack,
  Tooltip,
  UnstyledButton,
  Text,
  Group,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCookie } from "@tabler/icons-react";

export function CookieNotification() {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Drawer
        position="bottom"
        opened={opened}
        onClose={close}
        title={
          <Group>
            <IconCookie size={25} /> <Text span>Cookie Notice</Text>
          </Group>
        }
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size="auto"

      >
        <Stack>
          <Text>
            Don&rsquo;t worry, our website uses cookies that won&rsquo;t ruin
            your gains. By clicking &rsquo;Accept All&rsquo;, you&rsquo;ll power
            up your browsing experience with cookies that pack a punch. If you
            prefer to stick to your meal plan, click &rsquo;Manage
            preferences&rsquo; to adjust your cookie settings. For more
            information on how we fuel our website, click{" "}
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
                })
              }
            >
              Learn more
            </Anchor>
            .
          </Text>
          <Flex gap="md" direction={{ base: 'column', sm: 'row' }}>
            <Button onClick={close} color="steelteal.6" variant="outline" radius="xl">
              Deny
            </Button>
            <Button
              color="steelteal.6"
              variant="outline"
              radius="xl"
              onClick={() => {
                close();
                modals.open({
                  title: "Configure Cookies",
                  children: (
                    <>
                      <CookiesCard data={cookieData.data} />
                    </>
                  ),
                  radius: "md",
                  size: 800,
                  centered: true,
                });
              }}
            >
              Manage your cookies preferences
            </Button>
            <Button onClick={close} color="steelteal.6" radius="xl">
              Accept All Cookies
            </Button>
          </Flex>
        </Stack>
      </Drawer>
      <Affix position={{ bottom: rem(20), left: rem(20) }}>
        <Tooltip label="Cookies Settings">
          <UnstyledButton
            sx={(theme) => ({
              background: theme.colors.steelteal[6],
              borderRadius: theme.radius.xl,
              padding: 2,
            })}
            style={{ display: opened ? "none" : "block" }}
            onClick={() =>
              modals.open({
                title: "Configure Cookies",
                children: (
                  <>
                    <CookiesCard data={cookieData.data} />
                  </>
                ),
                radius: "md",
                size: 800,
                centered: true,
              })
            }
          >
            <IconCookie size={35} />
          </UnstyledButton>
        </Tooltip>
      </Affix>
    </>
  );
}
