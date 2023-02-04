import {
  Box,
  Button,
  Card,
  Collapse,
  Flex,
  Group,
  LoadingOverlay,
  Space,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck } from "@tabler/icons-react";
import axios from "axios";

import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { object, string } from "yup";

import { render } from "@react-email/render";
import SignUpEmail from "emails/signUpTemplate";
import { useState } from "react";

export function TestCard() {
  const [info, setInfo] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const validatorSchema = object().shape({
    email: string()
      .required("Email is required")
      .email("Please provide valid email"),
  });

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{ maxWidth: "350px" }}>
      <LoadingOverlay visible={loading} />
      <Formik
        initialValues={{
          email: "",
          // html: render(
          //   <SignUpEmail
          //     email={"gobreza@gmail.com"}
          //     linkUrl={"https://www.youtube.com/watch?v=s3PV9hat814"}
          //     imageUrl={`${origin}/strongman.png`}
          //     secondImg={`${origin}/neki.png`}
          //   />
          // ),
        }}
        validationSchema={validatorSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          const html = render(
            <SignUpEmail
              email={values.email}
              linkUrl={"https://www.youtube.com/watch?v=s3PV9hat814"}
              imageUrl={`${origin}/lgbt.png`}
              secondImg={`${origin}/neki.png`}
            />
          );
          setIsLoading(true);
          axios
            .post(
              "/api/0/sendSubmitionMail",
              { email: values.email, html: html },
              { timeout: 20000 }
            )
            .then((data) => {
              console.log(data);
              setInfo(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error(error);
              setIsLoading(false);
            });
        }}
      >
        {(formikProps: FormikProps<any>) => (
          <Form>
            <Stack>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Who do you think is gay?</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Write your friend an email to have a laugh. This page is a
                parody of a yt video{" "}
                <Text
                  component="a"
                  td="underline"
                  color="red"
                  sx={{cursor:"pointer"}}
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=s3PV9hat814")
                  }
                >
                  why are you gay
                </Text>
                .
              </Text>
              <Field name="email">
                {({ field, form, meta }: FieldProps) => {
                  const isInvalidBool =
                    meta.error !== undefined && meta.touched;
                  return (
                    <TextInput
                      label="Your friend email"
                      placeholder="Your friend email"
                      error={isInvalidBool ? meta.error : false}
                      icon={<IconAt size={14} />}
                      onChange={(event) =>
                        form.setFieldValue(
                          field.name,
                          event.currentTarget.value
                        )
                      }
                    />
                  );
                }}
              </Field>
              <Button
                color="red"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => formikProps.submitForm()}
              >
                Tell him he is gay 
              </Button>
              <Collapse in={info}>
                <Box
                  sx={(theme) => ({
                    border: `2px solid ${theme.colors.red[6]}`,
                    borderRadius: "15px",
                    padding: "10px",
                    maxWidth: "350px",
                  })}
                >
                  <Flex justify="apart">
                    <Text>Your email has been submited check your inbox.</Text>
                  </Flex>
                </Box>
              </Collapse>
            </Stack>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
