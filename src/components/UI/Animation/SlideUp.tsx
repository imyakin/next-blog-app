'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SlideUp = ({ children }: { children: ReactNode}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 30}}
    transition={{delay: 0.25, duration: 1}}
    >
      {children}
    </motion.div>
  )
}