"use client"

import React from 'react'
import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Stack } from "@chakra-ui/react";
import { GoBackHomeButton } from "@/src/components/GoBackHomeButton/GoBackHomeButton";
import { experience } from "@/src/mocks/experience";
import { Card } from '@/src/components/UI/Card/Card'

function About() {
  return (
    <MainLayout>
      <Stack>
        {experience.map((job, index) => {
          return (
            <div key={`${job.title}_${index}`}>
              <Card
                src={job.src}
                title={job.title}
                duration={job.duration}
                description={job.description}
                details={job.details} c
              />
            </div>
          );
        })}
        <GoBackHomeButton />
      </Stack>
    </MainLayout>
  )
}

export default About