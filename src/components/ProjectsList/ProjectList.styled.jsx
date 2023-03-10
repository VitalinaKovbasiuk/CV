import styled from '@emotion/styled';

export const ProjectsContainer = styled.ol`
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 65px;
  color: #d7d7d7;
`;
export const TitleProjects = styled.h2`
  padding: 5px;
  padding-left: 65px;
  color: #000000;
`;

export const ProjectsItem = styled.li`
  width: 95%;
  margin-bottom: 5px;
  list-style: none;
`;

export const ProjectLink = styled.a`
  color: #d0abb4;
  font-size: 22px;
  font-weight: 700;
  padding: 3px 0;
  padding-top: 0;
`;

export const ProjectGit = styled.a`
  padding-bottom: 0px;

  color: #4f4245;
`;

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #d0abb4;
    height: 3px;
    width: 100%;
  }
`;

export const ProjectsDescript = styled.p`
  margin-top: 7px;
  font-size: 14px;
  color: #666666;
`;

export const ProjectsTech = styled.p`
  margin-top: 5px;

  font-size: 12px;
  text-decoration: underline;
`;
