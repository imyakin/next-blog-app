import { TfiViewListAlt } from "react-icons/tfi";
import { home } from "@/app/constants";
import { Button } from "@chakra-ui/react";

export const ViewAllStackButton = () => <Button colorScheme='teal' leftIcon={<TfiViewListAlt/>}>{home.btnStack}</Button>