import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface CodeDevEmailProps {
  userName: string;
  link: string;
  label: string;
  btn: string;
}
export const CodeDevEmail = ({
  userName,
  link,
  label,
  btn,
}: CodeDevEmailProps) => (
  <Html>
    <Head />
    <Preview>Click to Expand if you don&apos;t see the full email.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://utfs.io/f/63783eee-3649-411a-aa58-3f4e11b75523-1zbfv.svg`}
          width="170"
          height="50"
          alt="DevCodeNexus"
          style={logo}
        />
        <Text style={paragraph}>Hi {userName},</Text>
        <Text style={paragraph}>{label}</Text>
        <Section style={btnContainer}>
          <Button style={button} href={link}>
            {btn}
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          CodeDevNexus
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Container>
    </Body>
  </Html>
);
export default CodeDevEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};
const logo = {
  margin: "0 auto",
};
const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
