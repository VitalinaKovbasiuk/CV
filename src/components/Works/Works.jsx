import React from 'react';
import {
  WorkContainer,
  WorkTitle,
  JobItem,
  JobTitle,
  JobDate,
  JobContext,
} from './Work.styled';

export default function Works() {
  return (
    <>
      <WorkTitle>Work Experience</WorkTitle>
      <WorkContainer>
        <JobItem>
          <JobTitle>Shop driver Office supplies</JobTitle>
          <JobContext>Delivery of goods to the stores.</JobContext>
          <JobDate>February 2021 - February 2022 | Ukraine</JobDate>
        </JobItem>

        <JobItem>
          <JobTitle>Project Manager OTOS</JobTitle>
          <JobContext>Management of requirements and documentation.</JobContext>
          <JobContext>
            Participation in the sales process and conclusion of contracts.
          </JobContext>
          <JobDate>Jule 2016 - April 2018 | Ukraine</JobDate>
        </JobItem>

        <JobItem>
          <JobTitle>Developer of heat supply projects Freelance</JobTitle>
          <JobContext>Projects developed using AutoCAD.</JobContext>
          <JobDate>September 2016 - 2017 | Ukraine</JobDate>
        </JobItem>
      </WorkContainer>
    </>
  );
}
