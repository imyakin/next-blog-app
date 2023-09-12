"use server";
import { Resend } from 'resend';
import { FormikValues } from 'formik';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (values: FormikValues) => {
  await resend.emails.send({
    from: "PersonalWebSite <onboarding@resend.dev>",
    to: 'myakinalex@gmail.com',
    subject: `Msg_from_${values.name}`,
    reply_to: values.email,
    text: values.message
  });
}