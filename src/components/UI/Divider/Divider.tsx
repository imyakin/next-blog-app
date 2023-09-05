'use client';
import { Divider as DividerChakra, DividerProps } from "@chakra-ui/react";

type Props = DividerProps;

export const Divider = ({...rest}: Props) => <DividerChakra {...rest} />;
