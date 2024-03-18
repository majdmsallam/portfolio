import React from 'react'
import Topbar from './TopBar/Topbar';
import Home from './Home/Home';
import MyProjects from './MyProjects/myProjects';
import AboutMe from './AboutMe/aboutMe';
import ProjectsData from './ProjectsData'
import Footer from './Footer/Footer'
import './App.css';

function App() {
  return (
      <div className="App">
        <div>
          <Topbar />
        </div>
        <div>
          <Home></Home>
        </div>
        <div>
          <AboutMe data={ProjectsData.skills}></AboutMe>
        </div>
        <div>
          <MyProjects data={ProjectsData.projects}></MyProjects>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
