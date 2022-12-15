import React from 'react';
import { SummaryContainer, MyName, CvText, Developer, } from './Summary.styled';

export default function Summary() {
  return (
    <SummaryContainer>
      <MyName>Oleksandr Barabash</MyName>
      <Developer>Front-End Developer</Developer>
      <CvText>
        Hello, I am studying Front End technologies. I am glad that you have a
        Junior vacancy and I want to join your company as a young developer for
        further development in IT technologies. I have knowledge of HTML, CSS,
        JavaScript, React, React Redux. I will be glad if you consider my
        candidacy and we can discuss the details of the vacancy. Sincerely,
        Oleksandr!
      </CvText>
    </SummaryContainer>
  );
}
