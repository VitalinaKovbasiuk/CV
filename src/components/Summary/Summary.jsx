import React from 'react';
import { SummaryContainer, MyName, CvText, Developer } from './Summary.styled';

export default function Summary() {
  return (
    <SummaryContainer>
      <MyName>Vitalina Kovbasiuk</MyName>
      <Developer>Front-End Developer</Developer>
      <CvText>
        Hello, I am a beginner full-stack developer. Motivated and
        ready to take on challenging tasks. I work well in a team and learn
        quickly. I have knowledge of Javascript, React, React Redux, HTML, CSS, SASS, Bootstrap, Webpack,
        GitHub. Responsible: stress-resistant, goal-oriented, sociable, capable
        of learning, active life position. I'm constantly
        interested in learning new technologies in web development. I will be glad if you consider my
        candidacy and we can discuss the details of the vacancy.
        
        Sincerely, Vitalina!
      </CvText>
    </SummaryContainer>
  );
}
