import SideBar from './SideBar/SideBar';
import Summary from './Summary/Summary';
import ProjectList from './ProjectsList/ProjectList';
import Education from './Education/Education';
import Works from './Works/Works';
import { AppContainer, Main } from './App.styled';
import { SideBarContainver } from './SideBar/SideBar.styled';

export const App = () => {
  return (
    <AppContainer>
      <SideBarContainver>
        <SideBar />
      </SideBarContainver>
      <Main>
        <Summary />
        <ProjectList />
        <Works />
        <Education />
      </Main>
    </AppContainer>
  );
};
