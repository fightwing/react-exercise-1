import React, { Component } from 'react';
import './App.scss';
import { Avatar } from '../src/components/Avatar';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss';
import MsgAboutMe from './components/AboutMe';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Avatar />
        <hr></hr>
        <MsgAboutMe />
        <Education />
      </div>
    );
  }
}

export default App;
