import { Button } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link';
import { routing } from "../../constants/routing";

export const GoBackHomeButton = () => {
  return (
    <Link href={routing.home}>
      <Button variant="outline" colorScheme="teal">Go back to Home</Button>
    </Link>
  );
};
