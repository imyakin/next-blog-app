'use client'

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

import { ReactNode } from 'react'

function Providers({children}: {children: ReactNode}) {
  return (
    <CacheProvider>
        <ChakraProvider>
            <SessionProvider>
              {children}
            </SessionProvider>
        </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers