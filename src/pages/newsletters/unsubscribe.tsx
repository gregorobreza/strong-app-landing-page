import { SecondaryButton } from "@/components/styledComponents/buttons/mainButtons";
import { SectionTextContainer } from "@/components/styledComponents/typography/sectionTypography";
import { Box, Button, Collapse, Stack, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Unsubscribe() {
  const router = useRouter();
  const user = router.query.costumer;
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);

  const { isLoading, mutate: unsubscribe } = useMutation({
    mutationFn: async ({ emailUuid }: { emailUuid: string }) => {
      return axios.post("/api/0/unsubscribeNewsletters", {
        emailUuid: emailUuid,
      });
    },
    onSuccess: (data) => {
      setSubmited(true);
      setTimeout(() => {
        setSubmited(false);
      }, 6000);
    },
    onError: (error) => {
      console.error(error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 6000);
    },
  });

  return (
    <Box h={"100vh"}>
      <Stack align="center" justify="center" h="100%">
        <SectionTextContainer>
          <Stack align="center">
            <Text size={16}>
              We&apos;re sorry to see you go! Please click button below to
              unsubscribe from our newsletter.
            </Text>
            <Button
              radius="xl"
              size="md"
              loading={isLoading}
              onClick={() =>
                unsubscribe({ emailUuid: typeof user == "string" ? user : "" })
              }
            >
              Unsubscribe
            </Button>
            <Collapse in={submited}>
              <Box
                sx={(theme) => ({
                  border: `3px solid ${theme.colors.steelteal[6]}`,
                  borderRadius: theme.radius.xl,
                  padding: 7,
                  backgroundColor: theme.colors.steelteal[6],
                  color: theme.white,
                })}
              >
                <Text align="center">
                  You succesfully unsubscribed from newsletters.
                </Text>
              </Box>
            </Collapse>
            <Collapse in={error}>
              <Box
                sx={(theme) => ({
                  border: `3px solid ${theme.colors.red[8]}`,
                  borderRadius: theme.radius.xl,
                  padding: 7,
                  backgroundColor: theme.colors.red[8],
                  color: theme.white,
                })}
              >
                <Text align="center">
                  Uh-oh, looks like a technical glitch. Please try again later.
                  ⚠️
                </Text>
              </Box>
            </Collapse>
          </Stack>
        </SectionTextContainer>
      </Stack>
    </Box>
  );
}
