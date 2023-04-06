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
import { hasCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export function CookieNotification() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!hasCookie("localConsent")) {
      open();
    } else {
      close();
    }
  }, []);

  const acceptCookie = () => {
    close();
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    // gtag('consent', 'update', {
    //   ad_storage: 'granted',
    //   analytics_storage: 'granted',
    // });
    console.log("accepting cookies");
  };
  const closeP = () => {
    close();
    console.log("closing");
  };
  const denyCookie = () => {
    close();
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };

  return (
    <>
      <Drawer
        position="bottom"
        closeOnClickOutside={false}
        opened={opened}
        onClose={closeP}
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
                  overlayProps: { opacity: 0.5, blur: 4 },
                })
              }
            >
              Learn more
            </Anchor>
            .
          </Text>
          <Flex
            gap="md"
            direction={{ base: "column", sm: "row" }}
            justify="flex-end"
          >
            <Button
              onClick={denyCookie}
              color="steelteal.6"
              variant="outline"
              radius="xl"
            >
              Only essential Cookies
            </Button>
            <Button
              color="steelteal.6"
              variant="outline"
              radius="xl"
              onClick={() => {
                close();
                modals.open({
                  title: (
                    <Group>
                      <IconCookie size={25} />{" "}
                      <Text span>Configure Cookies</Text>
                    </Group>
                  ),
                  children: (
                    <>
                      <CookiesCard data={cookieData.data} />
                    </>
                  ),
                  radius: "md",
                  size: 800,
                  centered: true,
                  overlayProps: { opacity: 0.5, blur: 4 },
                });
              }}
            >
              Manage your cookies preferences
            </Button>
            <Button onClick={acceptCookie} color="steelteal.6" radius="xl">
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
                title: (
                  <Group>
                    <IconCookie size={25} /> <Text span>Configure Cookies</Text>
                  </Group>
                ),
                children: (
                  <>
                    <CookiesCard data={cookieData.data} />
                  </>
                ),
                radius: "md",
                size: 800,
                centered: true,
                overlayProps: { opacity: 0.5, blur: 4 },
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
