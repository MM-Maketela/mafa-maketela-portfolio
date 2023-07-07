
import classes from './LandingPage.module.css';
import React, { Component } from 'react'
import Section1 from './Section1';
import Section2 from "./Section2";
import {Section3} from './Section3';
import Section4 from './Section4';
import Footer from './Footer';


export default class LandingPage extends Component {
  render() {
      return (
        <>
          <div className={classes.landingPage}>
            <div id="Home">
              <Section1 />
            </div>
            <div id="About">
              <Section2 />
            </div>
            <div id="Portfolio">
              <Section3 />
            </div>
            <div id="Contact">
              <Section4 />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </>
      );
  }
}
