"use client"

import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Text, Stack } from "@chakra-ui/react";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";

function About() {
  return (
    <MainLayout>
      <Stack>
        <Text as="b" fontSize="2xl" color="teal">About page in development</Text>
        <GoBackHomeButton />
      </Stack>
    </MainLayout>
  )
}

export default About