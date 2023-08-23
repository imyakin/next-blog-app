"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Divider } from "@chakra-ui/react";
import { Intro } from "@/src/components/homePageComponents/Intro";
import { Certificates } from "@/src/components/homePageComponents/Certificates";

const Home = () => {

  return (
    <MainLayout>
      <Intro />
      <Divider sx={{mt: 5, mb: 5}}/>
      <Certificates />
    </MainLayout>
  )
}

export default Home;