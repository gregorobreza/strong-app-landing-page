import {
  Box,
  Button,
  Card,
  Collapse,
  Flex,
  Group,
  Space,
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
    <Card shadow="sm" p="lg" radius="md" withBorder>
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
              imageUrl={`${origin}/strongman.png`}
              secondImg={`${origin}/neki.png`}
            />
          );
          axios
            .post(
              "/api/0/sendSubmitionMail",
              { email: values.email, html: html },
              { timeout: 20000 }
            )
            .then((data) => {
              console.log(data);
              setInfo(true);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        {(formikProps: FormikProps<any>) => (
          <Form>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Email test</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Write your email to test if it works.
            </Text>
            <Field name="email">
              {({ field, form, meta }: FieldProps) => {
                const isInvalidBool = meta.error !== undefined && meta.touched;
                return (
                  <TextInput
                    label="Your email"
                    placeholder="Your email"
                    error={isInvalidBool ? meta.error : false}
                    icon={<IconAt size={14} />}
                    onChange={(event) =>
                      form.setFieldValue(field.name, event.currentTarget.value)
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
              Submit
            </Button>
            <Space h="md" />
            <Collapse in={info}>
              <Box
                sx={(theme) => ({
                  border: `2px solid ${theme.colors.red[6]}`,
                  borderRadius: "15px",
                  padding: "10px",
                  maxWidth: "250px"
                })}
              >
                <Flex justify="apart">
                  <Text>Your email has been submited check your inbox.</Text>
                </Flex>
              </Box>
            </Collapse>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
