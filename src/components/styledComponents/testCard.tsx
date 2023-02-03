import { Button, Card, Group, Text, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import axios from "axios";

import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { object, string } from "yup";
import { render } from "@react-email/render"
import WelcomeEmail from "emails/welcomeTemplate";

export function TestCard() {
  const validatorSchema = object().shape({
    email: string()
      .required("Email is required")
      .email("Please provide valid email"),
  });

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Formik
        initialValues={{ email: "", html: render(WelcomeEmail()) }}
        validationSchema={validatorSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          axios
            .post("/api/0/sendSubmitionMail", values, { timeout: 20000 })
            .then((data) => console.log(data))
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
          </Form>
        )}
      </Formik>
    </Card>
  );
}
