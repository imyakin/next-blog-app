"use client"

import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Flex, Box } from "@chakra-ui/react";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";
import { stackImages } from "@/src/mocks/stack-images";
import { Image } from "@/src/components/UI/Image/Image";
import { motion } from "framer-motion";

function Stack() {
  return (
    <MainLayout>
      <Box mb={14}>
        <Flex flexWrap="wrap" justifyContent="center" sx={{mb: 5}}>
          {stackImages.map((img, i) => {
            return (
              <Box key={`${img.alt}_${i}`} sx={{m: 2}}>
                <motion.div
                  initial={{opacity: 0, translateX: -50, translateY: -50}}
                  animate={{opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 0.3, delay: i * 0.3 }}
                >
                  <a href={img.href} target="_blank">
                    <motion.div whileHover={{scale: 1.2}}>
                      <Image title={img.alt} src={img.src} alt={img.alt} width={80} height={80} />
                    </motion.div>
                  </a>
                </motion.div>
              </Box>
            )
          })}
        </Flex>
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 30}}
          transition={{delay: 0.25, duration: 1}}
        >
          <GoBackHomeButton />
        </motion.div>
      </Box>
    </MainLayout>
  )
}

export default Stack