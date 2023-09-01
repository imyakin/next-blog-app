"use client"

import { Box, Stack, Text } from '@chakra-ui/react';
import { SiGitbook, SiStorybook } from "react-icons/si";

export const Footer = () => {
  return (
    <Stack
      flexDirection='row'
      justifyContent="space-between"
      bgGradient='linear(to-r, gray.100, gray.200)'
      style={{position: "fixed", bottom: 0, left: 0, width: '100%', height: '60px'}}
    >
      <Box p={3} display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <SiGitbook/>
          <Text ml={1} mb={1} as="sub" size="xs">
            <a target="_blank" href="https://github.com/imyakin/next-blog-app">
              GitHub repo
            </a>
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <SiStorybook/>
          <Text ml={1} mb={1} as="sub" size="xs">
            <a target="_blank" href="https://64f071a17c6b0fa7c14d4433-qgqtttozfm.chromatic.com/">
                Deployed Storybook
            </a>
          </Text>
        </Box>
      </Box>
      <Box p={2} sx={{flexBasis: '50%'}} display="flex" flexDirection="column" alignItems="flex-end">
        <Text sx={{fontSize: '10px'}}>
          Handcrafted by
        </Text>
        <Text sx={{fontSize: '10px'}}>
          imyakin
        </Text>
      </Box>
    </Stack>
  );
}