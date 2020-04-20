import React, { Component, Fragment } from 'react';
import Menu from './Menu';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    // const distanceToTop = document.body.getBoundingClientRect().top;
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("skillsBox1").className = "showBox1";
      document.getElementById("skillsBox2").className = "showBox2";
    } else {
      document.getElementById("skillsBox1").className = "hiddeBox";
      document.getElementById("skillsBox2").className = "hiddeBox";
    };
  };
  render() {
    return (
      <Fragment>
        <Menu/>
        <Hero/>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
