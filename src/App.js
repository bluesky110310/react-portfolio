import React from 'react';

import CustomBox from './components/CustomBox';
// import Navbar from "./components/Navbar";

import Intro from "./pages/Intro";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import WorkExperience from "./pages/WorkExperience";
// import Education from "./pages/Education";
import Employment from "./pages/Employment";
import Portfolio from "./pages/Portfolio"

function App() {
    const skillNames = [ "HTML/CSS", "Bootstrap", "jQuery", "JavaScript", "Java", "Srping frameworks", "JSP", "Maven", "PHP", "Laravel", "Node.js", "Express" ];
    const skillValues = [ 100, 100, 100, 100, 100, 100, 100, 90, 80, 80, 80, 80 ];
    // const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Employment', 'WorkExperience', 'Education'];
    
    // const settings = ['Rain', 'Line', 'Star'];
    // const [particleVal, setParticleVal] = React.useState('Rain');
    return (
        <CustomBox>
            {/* <Navbar pages={pages} settings={settings} settingAction={selectParitlces}></Navbar> */}
            <Intro particleValue="Rain"></Intro>
            <About></About>
            <Skills skillNames={skillNames} skillValues={skillValues}></Skills>
            <Portfolio></Portfolio>
            <Employment></Employment>
            {/* <WorkExperience></WorkExperience> */}
            {/* <Education></Education> */}
        </CustomBox>
    );
}

export default App;
