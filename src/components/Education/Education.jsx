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
            National aviation university
          </AcademyTitle>
          <SpecialityTitle>
           Master's degree, Sociology
          </SpecialityTitle>
          <EducationDate>September 2006 - June 2011 | Ukraine</EducationDate>
        </EducationItem>
      </EducationContainer>
    </>
  );
}
