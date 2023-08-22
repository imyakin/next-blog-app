"use client"

import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Text, Stack as StackChakra } from "@chakra-ui/react";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";

function Stack() {
  return (
    <MainLayout>
      <StackChakra>
        <Text as="b" fontSize="2xl" color="teal">Stack page in development</Text>
        <GoBackHomeButton />
      </StackChakra>
    </MainLayout>
  )
}

export default Stack