import React from 'react';
import {
  EducationContainer,
  EducationTitle,
  AcademyTitle,
  SpecialityTitle,
  EducationDate,
  EducationItem,
} from './Education.styled';

export default function Education() {
  return (
    <>
      <EducationTitle>Education</EducationTitle>
      <EducationContainer>
        <EducationItem>
          <AcademyTitle>Student GO IT</AcademyTitle>
          <SpecialityTitle>
            Study modern technologies in the direction of Full Stack Developer.
          </SpecialityTitle>
          <EducationDate>April 2022 - now | Ukraine</EducationDate>
        </EducationItem>

        <EducationItem>
          <AcademyTitle>
            Odessa State Academy of Civil Engineering and Architecture
          </AcademyTitle>
          <SpecialityTitle>
            Heating and gas supply and ventilation
          </SpecialityTitle>
          <EducationDate>September 2011 - June 2016 | Ukraine</EducationDate>
        </EducationItem>
      </EducationContainer>
    </>
  );
}
