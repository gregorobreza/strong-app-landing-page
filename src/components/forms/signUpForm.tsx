import { signUpHtml } from "@/utils/renderUtils";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Chip,
  Collapse,
  createStyles,
  Group,
  LoadingOverlay,
  Modal,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconInfoCircle } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { object, string } from "yup";
import { TermsAndConditions } from "../dataComponents/formal/termsAndConditions";
import { PrimaryButton } from "../styledComponents/buttons/mainButtons";
import {
  SectionText,
  SectionTitle,
} from "../styledComponents/typography/sectionTypography";

export interface ISignUpForm {
  email: string;
  interestedAs: string[];
  athleteLevel: string;
  coachLevel: string;
  surveys: boolean;
}

const useStyles = createStyles((theme) => ({
  controlActive: {
    backgroundColor: theme.colors.steelteal[6],
  },
  label: {
    color: theme.white,
  },
}));

export function SignUpForm(): JSX.Element {
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery("(max-width: 500px)");
  const [opened, setOpened] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const initialValues: ISignUpForm = {
    email: "",
    interestedAs: ["athlete"],
    athleteLevel: "recreational",
    coachLevel: "recreational",
    surveys: true,
  };

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    let token = "";
    try {
      token = await executeRecaptcha("submitSignUpForm");
    } catch (error) {
      console.error(error);
    }
    return token;
  }, [executeRecaptcha]);

  const validatorSchema = object().shape({
    email: string()
      .required("Email is required")
      .email("Please provide valid email"),
  });

  const { isLoading, mutate: formSubmit } = useMutation({
    mutationFn: async ({
      formValues,
      html,
    }: {
      formValues: ISignUpForm;
      html: string;
    }) => {
      return axios.post("/api/0/sendSubmitionMail", {
        formValues: formValues,
        html: html,
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
  const { isLoading: reIsLoading, mutateAsync: reCaptcha } = useMutation({
    mutationFn: async ({ token }: { token: string }) => {
      return await axios.post("/api/0/verifyRecaptcha", {
        response: token,
      });
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
    <Box
      py={{ base: 20, sm: 50 }}
      px={{ base: 5, sm: 10 }}
      maw={500}
      sx={(theme) => ({ color: theme.colors.dark })}
      // pos="relative"
    >
      {/* <LoadingOverlay visible={isLoading || reIsLoading} overlayBlur={2} /> */}
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={<Text fw={700}>Optional survey program</Text>}
          centered
          radius="md"
        >
          <Stack spacing="lg">
            <SectionText>
              *Be a part of shaping the future of strength training by joining
              our survey program. With just a few occasional, simple
              questionnaires sent directly to your email, you&apos;ll have the
              opportunity to share your thoughts on what you want and need from
              current solutions on the market. And don&apos;t worry, we respect
              your time and won&apos;t send any unwanted emails. You can opt-out
              at any time. We appreciate your help!
            </SectionText>
            <Button
              size="md"
              radius="xl"
              color="steelteal.6"
              onClick={() => setOpened(false)}
            >
              Close
            </Button>
          </Stack>
        </Modal>
        <Formik
          initialValues={initialValues}
          validationSchema={validatorSchema}
          onSubmit={async (
            values: ISignUpForm,
            formikHelpers: FormikHelpers<ISignUpForm>
          ) => {
            // console.log(values);
            const token = await handleReCaptchaVerify();
            const checkValidity = await reCaptcha({ token: token || "" });
            console.log("check validity", checkValidity.data.redata);
            if (
              checkValidity.data.redata.success &&
              checkValidity.data.redata.score > 0.4
            ) {
              formSubmit({
                formValues: values,
                html: signUpHtml(values.email),
              });
            } else {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 6000);
            }
          }}
        >
          {(formikProps: FormikProps<ISignUpForm>) => (
            <Form id="sign-up-form">
              <SectionTitle color="dark">EARLY BIRD SIGN-UP</SectionTitle>
              <Stack spacing={30}>
                <Field name="email">
                  {({ field, form, meta }: FieldProps) => {
                    const isInvalidBool =
                      meta.error !== undefined && meta.touched;
                    return (
                      <TextInput
                        styles={(theme) => ({
                          input: {
                            backgroundColor: theme.colors.grayf[0],
                            color: "currentColor",
                          },
                          label: {
                            color: "currentcolor",
                          },
                        })}
                        radius="lg"
                        label="Your email address"
                        size="md"
                        required
                        error={isInvalidBool ? meta.error : false}
                        value={field.value}
                        onChange={(event) => {
                          form.setFieldValue(
                            field.name,
                            event.currentTarget.value
                          );
                        }}
                      />
                    );
                  }}
                </Field>
                <Field name="interestedAs">
                  {({ field, form, meta }: FieldProps) => {
                    const isInvalidBool =
                      meta.error !== undefined && meta.touched;
                    return (
                      <Stack spacing="xs">
                        <Text>
                          I am interested into platform as (can be both):
                        </Text>
                        <Chip.Group
                          value={field.value}
                          onChange={(value) =>
                            form.setFieldValue(field.name, value)
                          }
                          multiple
                        >
                          <Group>
                            <Chip size="md" value="athlete" color="steelteal.6">
                              an Athlete
                            </Chip>
                            <Chip size="md" value="coach" color="steelteal.6">
                              a Coach
                            </Chip>
                          </Group>
                        </Chip.Group>
                      </Stack>
                    );
                  }}
                </Field>
                <Collapse
                  in={formikProps.values.interestedAs.includes("athlete")}
                >
                  <Field name="athleteLevel">
                    {({ field, form, meta }: FieldProps) => {
                      const isInvalidBool =
                        meta.error !== undefined && meta.touched;
                      return (
                        <Stack spacing="xs">
                          <Text>
                            As an athlete I am into strength training:
                          </Text>
                          <SegmentedControl
                            classNames={{
                              controlActive: classes.controlActive,
                              label: classes.label,
                            }}
                            size={mediumScreen ? "xs" : "md"}
                            value={field.value}
                            onChange={(value) =>
                              form.setFieldValue(field.name, value)
                            }
                            data={[
                              { label: "Recreational", value: "recreational" },
                              {
                                label: "Semi-proffesional",
                                value: "semi-proffesional",
                              },
                              { label: "Proffesional", value: "proffesional" },
                            ]}
                            radius="xl"
                          />
                        </Stack>
                      );
                    }}
                  </Field>
                </Collapse>
                <Collapse
                  in={formikProps.values.interestedAs.includes("coach")}
                >
                  <Field name="coachLevel">
                    {({ field, form, meta }: FieldProps) => {
                      const isInvalidBool =
                        meta.error !== undefined && meta.touched;
                      return (
                        <Stack spacing="xs">
                          <Text>As a coach I help athletes that are:</Text>
                          <SegmentedControl
                            classNames={{
                              controlActive: classes.controlActive,
                              label: classes.label,
                            }}
                            size={mediumScreen ? "xs" : "md"}
                            value={field.value}
                            onChange={(value) =>
                              form.setFieldValue(field.name, value)
                            }
                            data={[
                              { label: "Recreational", value: "recreational" },
                              {
                                label: "Semi-proffesional",
                                value: "semi-proffesional",
                              },
                              { label: "Proffesional", value: "proffesional" },
                            ]}
                            radius="xl"
                          />
                        </Stack>
                      );
                    }}
                  </Field>
                </Collapse>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Field name="surveys">
                    {({ field, form, meta }: FieldProps) => {
                      const isInvalidBool =
                        meta.error !== undefined && meta.touched;
                      return (
                        <Group spacing={0} sx={{ flexWrap: "nowrap" }}>
                          <Checkbox
                            styles={(theme) => ({
                              label: { color: theme.colors.dark },
                            })}
                            size="md"
                            color="steelteal.6"
                            checked={field.value}
                            onChange={(event) =>
                              form.setFieldValue(
                                field.name,
                                event.currentTarget.checked
                              )
                            }
                            label={
                              <Text>
                                I want to participate in optional occasional
                                surveys*{" "}
                              </Text>
                            }
                          />
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <IconInfoCircle
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpened(true)}
                            />
                          </div>
                        </Group>
                      );
                    }}
                  </Field>
                </Box>

                <Stack spacing={5}>
                  <Text size={12}>
                    By submitting this form you agree with{" "}
                    <Anchor
                      color="red.7"
                      component="button"
                      onClick={() =>
                        modals.open({
                          title: "Terms & Conditions",
                          children: (
                            <>
                              <TermsAndConditions />
                            </>
                          ),
                          radius: "md",
                          size: 800,
                          overlayProps: { opacity: 0.5, blur: 4 },
                        })
                      }
                    >
                      Terms & Conditions
                    </Anchor>
                    .
                  </Text>
                  <Text size={12}>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <Anchor
                      color="red.7"
                      href="https://policies.google.com/privacy"
                      target="_blank"
                    >
                      Privacy Policy
                    </Anchor>{" "}
                    and{" "}
                    <Anchor
                      color="red.7"
                      href="https://policies.google.com/terms"
                      target="_blank"
                    >
                      Terms of Service
                    </Anchor>{" "}
                    apply.
                  </Text>
                  {/* <PrimaryButton
                    // onClick={() => formikProps.submitForm()}
                    size="md"
                    isLoading={isLoading || reIsLoading}
                    type="submit"
                  >
                    Submit
                  </PrimaryButton> */}
                  <Button radius="xl" size="md" loading={isLoading || reIsLoading} type="submit">
                    Submit
                  </Button>
                </Stack>
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
                      💪You succesfully submited form!{" "}
                      <Text
                        sx={{
                          transform: "scale(-1, 1)",
                          display: "inline-block",
                        }}
                        span
                      >
                        💪
                      </Text>
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
                      Uh-oh, looks like a technical glitch. Please try again
                      later. ⚠️
                    </Text>
                  </Box>
                </Collapse>
              </Stack>
            </Form>
          )}
        </Formik>
      </>
    </Box>
  );
}
