import { CookiesCard } from "@/components/dataComponents/formal/cookiesModal";
import { PrivacyPolicy } from "@/components/dataComponents/formal/privacyPolicy";
import { cookieData } from "@/staticData/cookieData";
import { useSetConsentCookies } from "@/utils/cookieSettings";
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
import { useRouter } from "next/router";
import { useEffect } from "react";

export function CookieNotification() {
  const [opened, { open, close }] = useDisclosure(false);
  const { acceptAllCookies, denyAllCookies, showCookiesBanner } =
    useSetConsentCookies();
    const router = useRouter()

  useEffect(() => {
    if (showCookiesBanner()) {
      open();
    } else {
      close();
    }
  }, [close, open, showCookiesBanner]);

  const acceptCookie = () => {
    close();
    setCookie("consent", "true", { maxAge: 60 * 60 * 24 * 365 });
    console.log("accepting cookies");
  };
  const denyCookie = () => {
    close();
    setCookie("consent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };

  return (
    <>
      <Drawer
        position="bottom"
        closeOnClickOutside={false}
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
              onClick={() => {
                denyAllCookies();
                close();
              }}
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
            <Button
              onClick={() => {
                acceptAllCookies();
                close();
                router.reload()
              }}
              color="steelteal.6"
              radius="xl"
            >
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
