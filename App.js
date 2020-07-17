import React, {Component} from 'react';
import Header from './Components/Header';
import Keyskills from './Components/Keyskills';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Education from './Components/Education';
import Details from './Components/Details';


class App extends Component {
    render() {
      return (
        <div>
        <Header />
        <Education />
        <Keyskills />
        <Experience />
        <Project />
        <Details />
        </div>
      )
    }
}

export default App;
