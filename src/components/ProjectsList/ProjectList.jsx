import React from 'react';
import {
  TitleProjects,
  ProjectsContainer,
  ProjectLink,
  ProjectsItem,
  ProjectsTech,
  ProjectsDescript,
  ProjectGit,
  LinkContainer,
} from './ProjectList.styled';
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub';
import { FaIceCream } from '@react-icons/all-files/fa/FaIceCream';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
// import { GiFilmProjector } from '@react-icons/all-files/gi/GiFilmProjector';
import { RiMovie2Line } from '@react-icons/all-files/ri/RiMovie2Line';
// import { CgList } from '@react-icons/all-files/cg/CgList';

const Projects = [
  {
    name: 'IceCream',
    icon: <FaIceCream size={18} />,
    href: 'https://vitalinakovbasiuk.github.io/IceCreamPassion/',
    link: 'https://github.com/VitalinaKovbasiuk/IceCreamPassion',
    technology: 'HTML5, CSS3, JavaScript, Parcel',
    discription: `This is a team project that we did with my group mates (11 people). I was front-end developer. I made a section Hero-Head, and animation.`,
  },
  {
    name: 'WebStudio',
    icon: <SiWebpack size={18} />,

    href: 'https://vitalinakovbasiuk.github.io/goit-markup-hw-08/',
    link: 'https://github.com/VitalinaKovbasiuk/goit-markup-hw-08',
    technology: 'HTML5, CSS3, JavaScript',
    discription: `The landing page was created using only HTML and CSS. The layout is made for three breakpoints: 480px, 768px and 1200px.
All background and content raster images are responsive and support x1 and x2 screens.
BEM methodology, SASS preprocessor were also used.`,
  },
  {
    name: 'Filmoteca',
    icon: <RiMovie2Line size={18} />,

    href: 'https://victor-rochnyak.github.io/Filmoteka/',
    link: 'https://github.com/Victor-Rochnyak/Filmoteka',
    technology: 'HTML5, CSS3, JavaScript, Parcel',
    discription: `A short-term team project by 6 collaborators.
I was a Team Lead assistant & Front-end developer of the project.`,
  },
];

export default function ProjectList() {
  return (
    <>
      <TitleProjects>Projects</TitleProjects>
      <ProjectsContainer>
        {Projects.map(({ href, name, icon, link, technology, discription }) => (
          <ProjectsItem key={href}>
            <LinkContainer>
              <ProjectLink href={href}>
                {icon} {name}
              </ProjectLink>
              <ProjectGit href={link}>
                <GoMarkGithub size={26} />
              </ProjectGit>
            </LinkContainer>
            <ProjectsDescript>{discription}</ProjectsDescript>
            <ProjectsTech>{technology}</ProjectsTech>
          </ProjectsItem>
        ))}
      </ProjectsContainer>
    </>
  );
}
