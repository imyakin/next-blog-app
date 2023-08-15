"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Image } from '@/src/components/UI/Image/Image';
import Avatar from '@/src/assets/images/avatar.jpeg'
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { home } from './constants'
import { Box, Text, Stack, useMediaQuery, Divider } from "@chakra-ui/react";
import { routing } from "@/src/constants/routing";
import { Link } from '@/src/components/UI/Link/Link';
import { ContactButton } from "@/src/components/ContactButton/ContactButton";
import { withHoverScale } from "@/src/components/UI/Animation/withHoverScale";
import { ViewAllStackButton } from "@/src/components/ViewAllStackButton/ViewAllStackButton";
import { Slider } from "@/src/components/UI/Slider/Slider";
import { SwiperSlide } from 'swiper/react';
import { slides } from "@/src/mocks/slides"

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)')
  const ScalableContactButton = withHoverScale(ContactButton, 1.2);
  const ScalableViewAllStackButton = withHoverScale(ViewAllStackButton, 1.2);

  return (
    <MainLayout>
      <SplitScreen>
        <Box sx={{minWidth: 300}} display={isMobile ? 'flex' : 'initial'} justifyContent={isMobile ? 'center' : 'initial'}>
          <Image
            src={Avatar}
            alt='avatar'
            width={300}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 15}}
            transition={{delay: 0.25}}
          />
        </Box>
        <Stack color="teal.500">
          <Text fontSize={isMobile ? "md" : 'xl'}>
            {home.greet}
          </Text>
          <Divider />
          <Text fontSize={isMobile ? "md" : '2xl'} align="center">
            {home.title}
          </Text>
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
      </SplitScreen>
      <Divider sx={{mt: 5, mb: 5}}/>
      <Stack>
        <Text as="u" fontSize={isMobile ? "md" : '2xl'} color="teal">
          {home.certificates}
        </Text>
        <Slider>
          {slides.map((slide) => {
              return (
                <SwiperSlide key={slide.href}>
                  <Image src={slide.href} alt={slide.alt} width={700} height={400} />
                </SwiperSlide>
              )
          })}
        </Slider>
      </Stack>
    </MainLayout>
  )
}

export default Home;