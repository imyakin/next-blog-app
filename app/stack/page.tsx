import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";
import { TechStackMapping } from './components/TechStackMapping';
import { Wrapper } from './components/Wrapper';
import { SlideUp } from "@/src/components/UI/Animation/SlideUp";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechStack',
};

function Stack() {
  return (
    <MainLayout>
      <Wrapper>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '5px'
        }}
        >
          <TechStackMapping />
        </div>
        <SlideUp>
          <GoBackHomeButton />
        </SlideUp>
      </Wrapper>
    </MainLayout>
  )
}

export default Stack