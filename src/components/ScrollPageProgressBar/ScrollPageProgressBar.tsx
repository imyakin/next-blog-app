"use client"

import { motion, useScroll } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import styles from './ScrollPageProgressBar.module.scss';

export const ScrollPageProgressBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');
  const { scrollYProgress } = useScroll();

  if(!isMobile){
    return null;
  }

  return (
    <motion.div
      className={styles.progress}
      style={{ scaleX: scrollYProgress }}
    />
  );
}