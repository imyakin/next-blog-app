'use client';

import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Field, Form as FormikForm, Formik, FormikValues, FormikHelpers } from 'formik';
import { contacts, Values, initialValues } from '../constants';
import { sendMail } from "../sendEmail";

export const Form = () => {
  const handleSubmit = async (values: FormikValues, action: FormikHelpers<FormikValues>) => {
    await sendMail(values);
    action.setSubmitting(false);
  };

  return  (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({isSubmitting}) => {
        return (
          <FormikForm>
            <Field name={Values.NAME}>
              {({field}) => (
                <FormControl isRequired>
                  <FormLabel>{contacts.form.name.label}</FormLabel>
                  <Input {...field} type="text" placeholder={contacts.form.name.placeholder} />
                </FormControl>
              )}
            </Field>

            <Field name={Values.EMAIL}>
              {({field}) => (
                <FormControl isRequired>
                  <FormLabel>{contacts.form.email.label}</FormLabel>
                  <Input {...field} type="email" placeholder={contacts.form.email.placeholder} />
                </FormControl>
              )}
            </Field>

            <Field name={Values.MESSAGE}>
              {({field}) => (
                <FormControl isRequired>
                  <FormLabel>{contacts.form.message.label}</FormLabel>
                  <Textarea
                    {...field}
                    placeholder={contacts.form.message.placeholder}
                  />
                </FormControl>
              )}
            </Field>

            <Box sx={{mt: 2}}>
              <Button type="submit" isLoading={isSubmitting}>{contacts.form.btn.text}</Button>
            </Box>
          </FormikForm>
        );
      }}
    </Formik>
  )
}