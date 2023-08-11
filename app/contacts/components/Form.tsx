import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

export const Form = () => {
  return  (
    <>
      <FormControl isRequired>
        <FormLabel>Name:</FormLabel>
        <Input type="text" name="name" placeholder="Enter your name please" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Message:</FormLabel>
        <Textarea
          placeholder="Enter your message please"
          name="message"
        />
      </FormControl>

      <Button>Send!</Button>
    </>
  )
}