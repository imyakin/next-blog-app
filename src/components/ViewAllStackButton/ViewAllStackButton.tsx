import { TfiViewListAlt } from "react-icons/tfi";
import { home } from "../../constants/home";
import { Button } from "@chakra-ui/react";

export const ViewAllStackButton = () => <Button colorScheme='teal' leftIcon={<TfiViewListAlt/>}>{home.btnStack}</Button>