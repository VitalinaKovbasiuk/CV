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
          <JobTitle>Talent Acquisition Specialist (All Ukraine)</JobTitle>
          <JobContext>Reckitt Benckiser Household & Healthcare Ukraine</JobContext>
          <JobDate>Nov 2016 - Oct 2017 | Ukraine</JobDate>
        </JobItem>

        <JobItem>
          <JobTitle>Recruitment consultant </JobTitle>
          <JobContext>Promotion Outstaffing</JobContext>
          <JobContext>
            Participation in the sales process and conclusion of contracts.
          </JobContext>
          <JobDate>Sep 2011 - Jul 2016 | Ukraine</JobDate>
        </JobItem>
      </WorkContainer>
    </>
  );
}
