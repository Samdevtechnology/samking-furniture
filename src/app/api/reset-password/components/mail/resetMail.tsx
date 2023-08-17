import formData from "form-data";
import Mailgun from "mailgun.js";
import template from "./template";

type props = {
  email: string;
  name: string;
  otp: number;
};

const API_KEY = process.env.MAILGUN_API_KEY || "key-yourkeyhere";
const DOMAIN = process.env.DOMAIN || "";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: "api", key: API_KEY });

const resetMail = async ({ email, name, otp }: props) => {
  const Template = template({ name, otp });
  const msgData = {
    from: `Samking Furniture <noreply@${DOMAIN}>`,
    to: email,
    subject: "Password Reset Code",
    text: "Testing some Mailgun awesomeness!",
    html: Template,
  };

  const sendMail = await mg.messages.create(DOMAIN, msgData);
  // return sendMail;
};

export default resetMail;
