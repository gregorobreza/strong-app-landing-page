import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";

interface SignUpProps {
  email: string;
  linkUrl: string;
  imageUrl: string;
}

export default function SignUpEmail({ email, linkUrl, imageUrl }: SignUpProps) {
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src={imageUrl}
            width="170"
            height="170"
            alt="StrongApp"
            style={logo}
          />
          <Text style={paragraph}>Hi {email},</Text>
          <Text style={paragraph}>Why are you gay?</Text>

          <div
            style={flag}
            role="img"
            aria-label="Gilbert Baker Pride Flag. Eight vertical bars of equal size: hot pink, red, orange, yellow, green, turquoise, blue, and indigo."
          ></div>

          <Section style={btnContainer}>
            <Button pX={12} pY={12} style={button} href={linkUrl}>
              Who says I am gay?
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            Strong Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Gay Right activist</Text>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: "#141517",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontFamily,
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  fontFamily,
  backgroundColor: "#E03131",
  borderRadius: "20px",
  fontWeight: 700,
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  fontFamily,
  color: "#ffffff",
  fontSize: "12px",
};

const flag = {
  width: "150px",
  aspectRatio: "70 / 45",
  background:
    "linear-gradient(hotpink 12.5%, red 0 25%, orange 0 37.5%, yellow 0 50%, green 0 62.5%, darkturquoise 0 75%, blue 0 87.5%, indigo 0)",
};
