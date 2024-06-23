import CodeDevEmail from "@/components/email-temp";
import VerifyEmail from "@/components/email-temp2fa";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    react: VerifyEmail({ token }),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const link = `${domain}/auth/new-password?token=${token}`;
  const userName = "User";
  const label = "Here is your password reset Link";
  const btn = "Reset Password";
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    react: CodeDevEmail({ userName, link, label, btn }),
  });
};

export const sendVerificationEmail = async (
  userName: string,
  email: string,
  token: string
) => {
  const link = `${domain}/auth/new-verification?token=${token}`;
  const label = "Welcome to CodeDevNexus.";
  const btn = "Verify Email";
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    react: CodeDevEmail({ userName, link, label, btn }),
  });
};
