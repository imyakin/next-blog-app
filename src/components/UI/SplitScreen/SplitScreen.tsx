'use client';

import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SplitScreen = ({children}: {children: ReactNode}) => {
  return (
    <Stack display="flex" justifyContent="space-between" direction={['column', 'row']}>
      {children}
    </Stack>
  );
}
