import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import * as React from "react";

export interface SignUpProps {
  email: string;
  unsubscribeUrl: string;
  imageUrl: string;
}

export default function SignUpEmail({
  email,
  unsubscribeUrl,
  imageUrl,
}: SignUpProps) {
  return (
    <Html>
      <Head />
      <Preview>Wellcome warrior!</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src={imageUrl}
            width="150"
            height="150"
            alt="BarbellLogbook"
            style={logo}
          />
          <Text style={paragraph}>
            Dear{" "}
            <Link
              style={{ color: "#E03131", textDecoration: "underline" }}
              href={`mailto:${email}`}
            >
              {email}
            </Link>
            ,
          </Text>
          <Text style={paragraph}>
            Thank you for signing up for Barbell Logbook's Early Bird program!
            Whether you're a strength athlete or coach, we're excited to have
            you on board and can't wait to share our latest product with you.
          </Text>
          <Text style={paragraph}>
            Barbell Logbook is designed for anyone who wants to track their
            strength training progress and achieve their goals. With features
            that make tracking your workouts and analyzing your performance
            easier than ever, Barbell Logbook is the ultimate tool for strength
            athletes and coaches alike.
          </Text>
          <Text style={paragraph}>
            As an Early Bird member, you'll have exclusive access to updates and
            sneak peeks of our new app. We're committed to creating an app that
            meets the unique needs of strength athletes and coaches, and your
            feedback will be an essential part of that process.
          </Text>
          <Text style={paragraph}>
            We'll be sending you regular updates as we make progress, so you'll
            always be in the know. And as a special thank you for being part of
            our Early Bird program, we'll be offering you a discount on the
            final app when it's released.
          </Text>
          <Text style={paragraph}>
            Thank you for your support and for being part of our community of
            strong athletes and coaches. We're excited to have you on board and
            can't wait to show you what Barbell Logbook can do for you.
          </Text>
          <Text style={paragraph}>
            Best regards,
            <br />
            Barbell Logbook Team
          </Text>
          <Hr style={hr} />

          <Section>
            <Text style={footerText}>
              © 2023 Barbell Logbook - All rights reserved.
            </Text>
            <Text style={footerText}>
              You can always{" "}
              <Link
                style={{ color: "#E03131", textDecoration: "underline" }}
                href={unsubscribeUrl}
              >
                Unsubscribe
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: "transparent",
};

const container = {
  margin: "0 auto",
  padding: "20px 20px 20px 20px",
  // padding: "45px",
  backgroundColor: "#141517",
  maxWidth: "50em",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontFamily,
  fontSize: "14px",
  lineHeight: "26px",
  color: "#ffffff",
  textAlign: "left" as const,
};

const btnContainer = {
  textAlign: "left" as const,
};

const button = {
  fontFamily,
  backgroundColor: "#E03131",
  borderRadius: "20px",
  fontWeight: 700,
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#ffffff",
  margin: "20px 0",
};

const footerText = {
  fontFamily,
  color: "#ffffff",
  fontSize: "12px",
  margin: "0px",
  textAlign: "center" as const,
};
