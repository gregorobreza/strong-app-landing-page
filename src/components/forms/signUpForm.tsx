import {
  Box,
  Checkbox,
  Chip,
  Collapse,
  createStyles,
  Group,
  Modal,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { useState } from "react";
import { object, string } from "yup";
import { PrimaryButton } from "../styledComponents/buttons/mainButtons";
import {
  SectionText,
  SectionTitle,
} from "../styledComponents/typography/sectionTypography";

interface ISignUpForm {
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

  const initialValues: ISignUpForm = {
    email: "",
    interestedAs: ["athlete"],
    athleteLevel: "recreational",
    coachLevel: "recreational",
    surveys: true,
  };

  const validatorSchema = object().shape({
    email: string()
      .required("Email is required")
      .email("Please provide valid email"),
  });

  return (
    <Box
      py={{ base: 20, sm: 50 }}
      px={{ base: 5, sm: 10 }}
      maw={500}
      sx={(theme) => ({ color: theme.colors.dark })}
    >
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={<Text fw={700}>Optional survey program</Text>}
          centered
          radius="xl"
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
            <PrimaryButton size="md" onClick={() => setOpened(false)}>
              Close
            </PrimaryButton>
          </Stack>
        </Modal>
        <Formik
          initialValues={initialValues}
          validationSchema={validatorSchema}
          onSubmit={(
            values: ISignUpForm,
            formikHelpers: FormikHelpers<ISignUpForm>
          ) => {
            console.log(values);
          }}
        >
          {(formikProps: FormikProps<ISignUpForm>) => (
            <Form>
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
                          <Chip size="md" value="athlete" color="steelteal.6">
                            an Athlete
                          </Chip>
                          <Chip size="md" value="coach" color="steelteal.6">
                            a Coach
                          </Chip>
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

                <PrimaryButton
                  onClick={() => formikProps.submitForm()}
                  size="md"
                >
                  Submit
                </PrimaryButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </>
    </Box>
  );
}
