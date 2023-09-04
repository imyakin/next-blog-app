'use client';

import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { contacts } from '../constants';

export const Form = () => {
  return  (
    <Box _before={{
      content: '"in development"',
      visibility: 'hidden',
      opacity: 0,
      backgroundColor: 'teal',
      color: '#fff',
      textAlign: 'center',
      borderRadius: '5px',
      padding: '5px',
      transition: 'opacity 1s ease-in-out',
    }}
    _hover={{
      _before:{
        visibility: 'visible',
        opacity: 1
      }
    }}
    >
      <FormControl isRequired isDisabled>
        <FormLabel>{contacts.form.name.label}</FormLabel>
        <Input type="text" name={contacts.form.name.name} placeholder={contacts.form.name.placeholder} />
      </FormControl>

      <FormControl isRequired isDisabled>
        <FormLabel>{contacts.form.message.label}</FormLabel>
        <Textarea
          placeholder={contacts.form.message.placeholder}
          name={contacts.form.message.name}
        />
      </FormControl>
      <Box sx={{mt: 2}}>
        <Button isDisabled>{contacts.form.btn.text}</Button>
      </Box>
    </Box>
  )
}