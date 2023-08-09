"use client"

import { MainLayout } from "../src/layouts/MainLayout/MainLayout";
import Image from "next/image";
import Avatar from '@/src/assets/images/avatar.jpeg'
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <SplitScreen>
        <Image
          src={Avatar}
          alt='avatar'
          width={300}
          height={300}
        />
        <Box>
          <p>
          ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam amet cum cumque delectus eaque, excepturi, facere facilis ipsam pariatur quas repellat reprehenderit vel veritatis. Aliquid amet aperiam, assumenda blanditiis consectetur corporis delectus deserunt dolore doloremque eius incidunt labore maxime nobis nostrum praesentium, provident rem sequi tempora unde ut! Commodi consequuntur ducimus fuga maiores modi numquam officiis ullam? Aliquam, architecto assumenda cupiditate debitis eaque explicabo id impedit maiores mollitia nemo nisi officia pariatur possimus praesentium quos repellendus reprehenderit repudiandae ullam velit voluptatem? Accusantium ad, amet asperiores, autem beatae eius enim esse incidunt laborum laudantium magni maiores molestias nobis non nostrum officiis, quam qui quo ratione reiciendis repellendus repudiandae suscipit ullam unde voluptate! Ab aperiam fugit nostrum! Beatae, quod, voluptates
          </p>
          </Box>
      </SplitScreen>
    </MainLayout>
  )
}
