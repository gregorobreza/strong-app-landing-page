import { PrimaryButton } from "@/components/styledComponents/buttons/mainButtons";
import { Title, Text, Stack } from "@mantine/core";
import { modals, useModals } from "@mantine/modals";

export function PrivacyPolicy(): JSX.Element {
  return (
    <Stack>
      <Text>
        This privacy policy applies to the use of the landing page owned and
        operated by Barbell Logbook. This policy sets out how we collect, use,
        and protect any information that you give us when you use our website.
        We are committed to protecting your privacy and ensuring that your
        personal information is processed lawfully, fairly, and transparently.
      </Text>
      <Title order={3}>Data Collection</Title>
      <Text>We may collect the following information:</Text>
      <Text>
        {" "}
        Personal information such as your name, email address, phone number, and
        other contact information when you fill out a form or sign up for our
        newsletter. Demographic information such as your age, gender, location,
        and preferences. Information about your device, browser, IP address, and
        other technical details when you access our website. Information about
        your interactions with our website, such as the pages you visit, the
        links you click on, and the time and date of your visits.
      </Text>
      <Text>
        We may also use cookies, web beacons, and other tracking technologies to
        collect data about your online behavior and preferences.
      </Text>
      <Title order={3}>Use of Data</Title>
      <Text>We use the information we collect to:</Text>
      <Text>
        Provide you with the products and services you requested. Communicate
        with you about our products and services, promotions, and offers.
        Analyze and improve our website, products, and services. Personalize
        your user experience and provide you with customized content and
        advertising. Detect and prevent fraud, security breaches, and other
        illegal activities.
      </Text>
      <Text>
        We may also share your information with third-party service providers
        who help us deliver our products and services or with our business
        partners who offer complementary products or services.
      </Text>
      <Title order={3}>Data Security</Title>
      <Text>
        We take reasonable and appropriate measures to protect your personal
        information from unauthorized access, use, and disclosure. We use
        industry-standard encryption technologies, firewalls, and other security
        measures to safeguard your data. We also limit access to your data to
        only those employees, contractors, and agents who need it to perform
        their duties.
      </Text>
      <Title order={3}>Cookies and Other Tracking Technologies</Title>
      <Text>
        We may use cookies, web beacons, and other tracking technologies to
        collect information about your online behavior and preferences. Cookies
        are small data files that are stored on your device when you visit our
        website. They allow us to remember your preferences and provide you with
        a personalized experience. We may use both session cookies and
        persistent cookies. Session cookies are deleted when you close your
        browser, while persistent cookies remain on your device until they
        expire or you delete them. We may also use third-party cookies to track
        your online behavior and serve you with personalized ads. These cookies
        are governed by the privacy policies of the third-party providers and
        not by this privacy policy. You can control the use of cookies through
        your browser settings or trough cookies preferences on the page. Most
        browsers allow you to block or delete cookies, but doing so may limit
        your ability to use certain features of our website.
      </Text>
      <Title order={3}>Your Rights</Title>
      <Text>You have the right to:</Text>
      <Text>
        Access your personal information and request its correction, deletion,
        or restriction of processing. Object to the processing of your personal
        information and withdraw your consent at any time. Receive a copy of
        your personal information in a structured, commonly used, and
        machine-readable format. Lodge a complaint with a supervisory authority
        if you believe your rights have been violated.
      </Text>
      <Title order={3}>Updates to Privacy Policy</Title>
      <Text>
        We may update this privacy policy from time to time to reflect changes
        in our practices, technologies, and legal requirements. We will notify
        you of any material changes by posting a notice on our website or
        sending you an email.
      </Text>
      <Title order={3}>Contact Us</Title>
      <Text>
        If you have any questions or concerns about this privacy policy or our
        data practices, please contact us at info@barbelllogbook.com.
      </Text>
      <Text>
        By using our website, you consent to the terms of this privacy policy
        and agree to the collection, use, and sharing of your information as
        described herein.
      </Text>
      <PrimaryButton color="steelteal.6" size="md" onClick={() => modals.closeAll()}>
        Close
      </PrimaryButton>
    </Stack>
  );
}
