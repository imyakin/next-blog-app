import NextLink from 'next/link';
import { Link as LinkChakra } from '@chakra-ui/react';
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({children, href, ...restProps}: LinkProps) => {
  return (
    <LinkChakra {...restProps} as={NextLink!} href={href}>
      {children}
    </LinkChakra>
  )
};
