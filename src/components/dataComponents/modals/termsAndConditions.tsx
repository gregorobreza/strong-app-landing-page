import { PrimaryButton } from "@/components/styledComponents/buttons/mainButtons";
import { Stack, Text, Title } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";

export const TermsAndConditionsModal = ({ context, id, innerProps }: ContextModalProps<{}>) =>{

  return (
    <Stack>
      <Text>
        By providing your email address and clicking the &quot;Submit&quot;
        button, you agree to receive marketing emails and newsletters from
        Barbell Logbook. Here are the terms and conditions that govern your use
        of our email sign-up form:
      </Text>
      <Title order={3}>Email Subscription</Title>
      <Text>
        By submitting your email address, you agree to receive promotional
        emails and newsletters from Barbell Logbook. We will send you updates
        about our products, services, and promotions. You may unsubscribe from
        our emails at any time by clicking the &quot;Unsubscribe&quot; link at
        the bottom of our emails.
      </Text>

      <Title order={3}> Personal Information</Title>
      <Text>
        We will collect and process your email address for the purpose of
        sending you marketing emails and newsletters. We will not sell or share
        your information with third parties, except as necessary to deliver our
        services or as required by law.
      </Text>

      <Title order={3}>Intellectual Property</Title>
      <Text>
        All content in our marketing emails and newsletters, including text,
        images, videos, and graphics, is owned by Barbell Logbook and protected
        by intellectual property laws. You may not copy, distribute, or use our
        content without our prior written consent.
      </Text>
      <Title order={3}>Disclaimer</Title>
      <Text>
        Our marketing emails and newsletters are provided &quot;as is&quot;
        without any warranties or guarantees. We make no representations or
        warranties about the accuracy, completeness, or reliability of the
        information contained in our emails.
      </Text>

      <Title order={3}>Limitation of Liability</Title>
      <Text>
        We will not be liable for any damages or losses arising from your use of
        our marketing emails and newsletters, including but not limited to
        direct, indirect, incidental, punitive, or consequential damages.
      </Text>
      <Title order={3}>Governing Law</Title>
      <Text>
        These terms and conditions shall be governed by and construed in
        accordance with the laws of EU. Any disputes arising from or related to
        these terms and conditions shall be resolved in the courts.
      </Text>
      <Title order={3}>Changes to Terms and Conditions</Title>
      <Text>
        We may update these terms and conditions from time to time without
        notice. By continuing to use our email sign-up form, you agree to the
        updated terms and conditions.
      </Text>
      <Text>
        By providing your email address and clicking the &quot;Submit&quot;
        button, you acknowledge that you have read and understood these terms
        and conditions and agree to be bound by them.
      </Text>
      <PrimaryButton color="steelteal.6" size="md" onClick={() => context.closeModal(id)}>
        Close
      </PrimaryButton>
    </Stack>
  );
}
