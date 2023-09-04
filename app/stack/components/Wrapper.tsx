'use client';

import { Box } from "@chakra-ui/react";
import { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box mb={14}>
      {children}
    </Box>
  )
}