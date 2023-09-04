'use client';

import { experience } from "@/src/mocks/experience";
import { Card } from "@/src/components/UI/Card/Card";
import React from "react";

export const ExperienceMapping = () => {
  return (
    <>
      {experience.map((job, index) => {
        return (
          <div key={`${job.title}_${index}`}>
            <Card
              src={job.src}
              title={job.title}
              duration={job.duration}
              description={job.description}
              details={job.details}
            />
          </div>
        );
      })}
    </>
  )
}