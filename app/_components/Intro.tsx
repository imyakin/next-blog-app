'use client';

import { Box, Divider, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Image } from "@/src/components/UI/Image/Image";
import Avatar from "@/src/assets/images/avatar.jpeg";
import { home } from "../../src/constants/home";
import { Link } from "@/src/components/UI/Link/Link";
import { routing } from "@/src/constants/routing";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { withHoverScale } from "@/src/components/UI/Animation/withHoverScale";
import { ContactButton } from "@/src/components/ContactButton/ContactButton";
import { ViewAllStackButton } from "@/src/components/ViewAllStackButton/ViewAllStackButton";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { stackImages } from "@/src/mocks/stack-images";
import { animation } from "@/src/constants/animation";

export const Intro = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["0 1", "1 1"],
  });
  const ScalableContactButton = withHoverScale(ContactButton, 1.2);
  const ScalableViewAllStackButton = withHoverScale(ViewAllStackButton, 1.2);

  return (
    <SplitScreen>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{minWidth: 300}}
      >
        <Image
          src={Avatar}
          alt='avatar'
          width={300}
          variants={animation}
          custom={1}
        />
      </motion.div>
      <Box>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={animation} custom={2}>
            <Text fontSize={isMobile ? "md" : 'xl'} color="teal.500">
              {home.greet}
            </Text>
          </motion.div>
          <motion.div variants={animation} custom={2}>
            <Divider />
          </motion.div>
          <motion.div variants={animation} custom={3}>
            <Text fontSize={isMobile ? "md" : '2xl'} align="center" color="teal.500">
              {home.title}
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          ref={stackRef}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={animation} custom={3}>
            <Stack color="teal.500">
              <Text as="u" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
                {home.stack}
              </Text>
              <Flex justifyContent="center" flexWrap="wrap" sx={{mb: 5}}>
                {stackImages.slice(0, 12).map((img, i) => {
                  return (
                    <Box key={`${img.alt}_${i}`} sx={{m: 2}}>
                      <motion.div
                        initial={{opacity: 0, translateX: -50, translateY: -50}}
                        animate={{opacity: 1, translateX: 0, translateY: 0}}
                        transition={{ duration: 0.3, delay: i * 0.3 }}
                      >
                        <a href={img.href} target="_blank">
                          <motion.div whileHover={{scale: 1.2}}>
                            <Image title={img.alt} src={img.src} alt={img.alt} width={100} height={100} />
                          </motion.div>
                        </a>
                      </motion.div>
                    </Box>
                  )
                })}
              </Flex>
              <Text as="b" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
                {home.techs}
              </Text>
              <Box display="flex" justifyContent="center">
                <Link href={routing.stack} >
                  <ScalableViewAllStackButton />
                </Link>
              </Box>
              <Text fontSize={isMobile ? "md" : 'xl'} align="center">
                {home.text}
              </Text>
              <Text as="b" fontSize={isMobile ? "sm" : 'lg'} align="center">
                {home.endText}
              </Text>
              <Box display="flex" justifyContent="center">
                <Link href={routing.contacts} >
                  <ScalableContactButton />
                </Link>
              </Box>
            </Stack>
          </motion.div>
        </motion.div>
      </Box>
    </SplitScreen>
  );
};
