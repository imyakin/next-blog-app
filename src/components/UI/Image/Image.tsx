import Image from "next/image";
import type { ImageProps } from "@chakra-ui/next-js";
import { motion } from 'framer-motion';

type Props = ImageProps;

const MImage = motion<Omit<Props, 'transition'>>(Image)

export { MImage as Image };