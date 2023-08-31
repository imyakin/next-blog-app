import { Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { home } from "../../constants/home";
import { Slider } from "@/src/components/UI/Slider/Slider";
import { slides } from "@/src/mocks/slides";
import { SwiperSlide } from 'swiper/react';
import { Image } from "@/src/components/UI/Image/Image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const Certificates = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress
        }}
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 30}}
        transition={{delay: 0.25, duration: 1}}
      >
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
      </motion.div>
    </>
  );
}