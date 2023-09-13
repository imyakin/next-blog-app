'use client';
import { useFormik } from "formik";
import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { contacts, Values, initialValues } from '../constants';
import { sendMail } from "../sendEmail";

export const Form = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      await sendMail(values);
      action?.setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl isRequired>
        <FormLabel>{contacts.form.name.label}</FormLabel>
        <Input
          type="text"
          name={Values.NAME}
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder={contacts.form.name.placeholder}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{contacts.form.email.label}</FormLabel>
        <Input
          type="email"
          name={Values.EMAIL}
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={contacts.form.email.placeholder}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{contacts.form.message.label}</FormLabel>
        <Textarea
          name={Values.MESSAGE}
          value={formik.values.message}
          onChange={formik.handleChange}
          placeholder={contacts.form.message.placeholder}
        />
      </FormControl>

      <Box sx={{mt: 2}}>
        <Button type="submit" isLoading={formik.isSubmitting}>{contacts.form.btn.text}</Button>
      </Box>
    </form>
  );
}