'use client';
import { Box as BoxChakra, BoxProps } from "@chakra-ui/react";

type Props = BoxProps;

export const Box = ({...rest}: Props) => <BoxChakra {...rest} />;
