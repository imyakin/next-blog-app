"use server";
import { Resend } from "resend";
import { FormikValues } from "formik";
import { RESEND_API_KEY } from "@/app/contacts/constants";

const resend = new Resend(RESEND_API_KEY);

export const sendMail = async (values: FormikValues) => {
  await resend.emails.send({
    from: "PersonalWebSite <onboarding@resend.dev>",
    to: "myakinalex@gmail.com",
    subject: `Msg_from_${values.name}`,
    reply_to: values.email,
    text: values.message,
  });
};
