

import './App.css';
import Main from './components/Main';
import ProjectsFile from "./components/ProjectsFile";
import Resume from './components/Resume';
import Skills from './components/skills';
import About from './components/About';

function App() {

  return (
    <div className="App">
    <Main id="/"/>
    <Skills id="skills"/>
    <Resume id="resume"/>
    <ProjectsFile id="project"/>
    <About id="about"/>
    </div>
  );
}

export default App;
