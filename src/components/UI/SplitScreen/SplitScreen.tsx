import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SplitScreen = ({children}: {children: ReactNode}) => {
  return (
    <Stack direction={['column', 'row']}>
      {children}
    </Stack>
  );
}
