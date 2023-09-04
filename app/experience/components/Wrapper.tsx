'use client';

import { Stack } from "@chakra-ui/react";
import { ReactNode } from 'react';

export const Wrapper = ({ children }: ReactNode) => {
  return (
    <Stack mb={14}>
      {children}
    </Stack>
  )
}