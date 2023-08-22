import { ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { JSX } from "react";

export const withHoverScale = (Component: () => JSX.Element, scale: number) => {
  // eslint-disable-next-line react/display-name
  return (props: ButtonProps) => {
    return (
      <motion.div whileHover={{ scale }}>
        <Component {...props} />
      </motion.div>
    );
  };
}