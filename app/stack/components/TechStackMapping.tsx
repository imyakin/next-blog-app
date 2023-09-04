'use client';

import { stackImages } from "@/src/mocks/stack-images";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Image } from "@/src/components/UI/Image/Image";
import React from "react";

export const TechStackMapping = () => {
  return (
    <>
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
    </>
  );
};
