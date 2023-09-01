"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Divider, Box } from "@chakra-ui/react";
import { Intro } from "@/src/components/homePageComponents/Intro";
import { Certificates } from "@/src/components/homePageComponents/Certificates";

const Home = () => {

  return (
    <MainLayout>
      <Intro />
      <Divider sx={{mt: 5, mb: 5}}/>
      <Box mb={14}>
        <Certificates />
      </Box>
    </MainLayout>
  )
}

export default Home;