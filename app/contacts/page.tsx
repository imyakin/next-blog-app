"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Form } from "./components/Form";
import { Box, Stack } from "@chakra-ui/react";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";

const Contacts = () => {
  return (
    <MainLayout>
      <SplitScreen>
        <Box>some text</Box>
        <Stack>
          <Form/>
        </Stack>
      </SplitScreen>
    </MainLayout>
  )
}

export default Contacts;