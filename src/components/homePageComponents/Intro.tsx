import { Box, Divider, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Image } from "@/src/components/UI/Image/Image";
import Avatar from "@/src/assets/images/avatar.jpeg";
import { home } from "@/app/constants";
import { Link } from "@/src/components/UI/Link/Link";
import { routing } from "@/src/constants/routing";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { withHoverScale } from "@/src/components/UI/Animation/withHoverScale";
import { ContactButton } from "@/src/components/ContactButton/ContactButton";
import { ViewAllStackButton } from "@/src/components/ViewAllStackButton/ViewAllStackButton";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const Intro = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["0 1", "1 1"],
  });
  const ScalableContactButton = withHoverScale(ContactButton, 1.2);
  const ScalableViewAllStackButton = withHoverScale(ViewAllStackButton, 1.2);
  return (
    <SplitScreen>
      <Box sx={{minWidth: 300}} display={isMobile ? 'flex' : 'initial'} justifyContent={isMobile ? 'center' : 'initial'}>
        <Image
          src={Avatar}
          alt='avatar'
          width={300}
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -30}}
          transition={{delay: 0.25, duration: 1}}
        />
      </Box>
      <Box>
        <Stack color="teal.500">
          <Text fontSize={isMobile ? "md" : 'xl'}>
            {home.greet}
          </Text>
          <Divider />
          <Text fontSize={isMobile ? "md" : '2xl'} align="center">
            {home.title}
          </Text>
        </Stack>
        <motion.div
          ref={stackRef}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
          }}
        >
          <Stack color="teal.500">
            <Text as="u" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
              {home.stack}
            </Text>
            <Text as="b" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
              {home.techs}
            </Text>
            <Box display="flex" justifyContent="center">
              <Link href={routing.stack} >
                <ScalableViewAllStackButton />
              </Link>
            </Box>
            <Text fontSize={isMobile ? "md" : 'xl'} align="center">
              {home.text}
            </Text>
            <Text as="b" fontSize={isMobile ? "sm" : 'lg'} align="center">
              {home.endText}
            </Text>
            <Box display="flex" justifyContent="center">
              <Link href={routing.contacts} >
                <ScalableContactButton />
              </Link>
            </Box>
          </Stack>
        </motion.div>
      </Box>
    </SplitScreen>
  );
};
