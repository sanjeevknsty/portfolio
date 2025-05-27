

import './App.css';
import Main from './components/Main';
import ProjectsFile from "./components/ProjectsFile";
import Resume from './components/Resume';
import Skills from './components/skills';
import About from './components/About';

function App() {

  return (
       <div className="App">
      <div id="/"> <Main /> </div>
      <div id="ski"> <Skills /> </div>
      <div id="resume"> <Resume /> </div>
      <div id="project"> <ProjectsFile /> </div>
      <div id="about"> <About /> </div>
    </div>

  );
}

export default App;
