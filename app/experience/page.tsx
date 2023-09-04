import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";
import { ExperienceMapping } from "./components/ExperienceMapping";
import { Wrapper } from './components/Wrapper';
import { SlideUp } from "@/src/components/UI/Animation/SlideUp";

function Experience() {
  return (
    <MainLayout>
      <Wrapper>
        <ExperienceMapping />
        <SlideUp>
          <GoBackHomeButton />
        </SlideUp>
      </Wrapper>
    </MainLayout>
  )
}

export default Experience