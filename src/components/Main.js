import React, { Component, Fragment } from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Presentation/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Fragment>
    );
  };
};

export default Main;