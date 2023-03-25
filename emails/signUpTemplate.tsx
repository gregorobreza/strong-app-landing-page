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

export interface SignUpProps {
  email: string;
  linkUrl: string;
  imageUrl: string;
}

export default function SignUpEmail({
  email,
  linkUrl,
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
            width="140"
            height="140"
            alt="BarbellLogbook"
            style={logo}
          />
          <Text style={paragraph}>Hi {email},</Text>
          <Text style={paragraph}>You succesfully submited form</Text>

          <Section style={btnContainer}>
            <Button pX={12} pY={12} style={button} href={linkUrl}>
              Check when we will?
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            get stronger
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Barbell Logbook</Text>
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
  //   padding: "20px 0 48px",
  padding: "45px",
  backgroundColor: "#141517",
};


const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontFamily,
  fontSize: "16px",
  lineHeight: "26px",
  color: "#ffffff",
  textAlign: "center" as const,
};

const btnContainer = {
  textAlign: "center" as const,
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
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  fontFamily,
  color: "#ffffff",
  fontSize: "12px",
};


