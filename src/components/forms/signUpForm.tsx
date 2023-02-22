import {
  Checkbox,
  SegmentedControl,
  Stack,
  TextInput,
  Text,
  Chip,
  Collapse,
  Box,
} from "@mantine/core";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from "formik";
import { PrimaryButton } from "../styledComponents/buttons/mainButtons";
import { SectionTitle } from "../styledComponents/typography/sectionTypography";

interface ISignUpForm {
  email: string;
  interestedAs: string[];
  athleteLevel: string;
  coachLevel: string;
  surveys: boolean;
}

export function SignUpForm(): JSX.Element {
  const initialValues: ISignUpForm = {
    email: "",
    interestedAs: ["athlete"],
    athleteLevel: "",
    coachLevel: "",
    surveys: true,
  };

  return (
    <Box py={50} px={10} sx={(theme) => ({ color: theme.colors.dark })}>
      <Formik
        initialValues={initialValues}
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
                        backgroundColor:theme.colors.grayf[0],
                        color: "currentColor"
                      },
                      label:{
                        color: "currentcolor"
                      },
                      
                    })}
                      radius="xl"
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
                        <Chip value="athlete">an Athlete</Chip>
                        <Chip value="coach">a Coach</Chip>
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
                        <Text>As an athlete I am into strength training:</Text>
                        <SegmentedControl
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
              <Collapse in={formikProps.values.interestedAs.includes("coach")}>
                <Field name="coachLevel">
                  {({ field, form, meta }: FieldProps) => {
                    const isInvalidBool =
                      meta.error !== undefined && meta.touched;
                    return (
                      <Stack spacing="xs">
                        <Text>As a coach I help athletes that are:</Text>
                        <SegmentedControl
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
                      <Checkbox
                      styles={(theme) => ({label:{color: "currentColor"}})}
                        size="md"
                        checked={field.value}
                        onChange={(event) =>
                          form.setFieldValue(
                            field.name,
                            event.currentTarget.checked
                          )
                        }
                        label="I want to participate in occasional surveys*"
                      />
                    );
                  }}
                </Field>
              </Box>
              <PrimaryButton type="submit" size="md">
                Submit
              </PrimaryButton>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
