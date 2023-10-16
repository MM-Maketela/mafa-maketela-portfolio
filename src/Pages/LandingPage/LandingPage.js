
import classes from './LandingPage.module.css';
import React, { Component } from 'react'
import LandingSection from './LandingSection';
import AboutMafa from "./AboutMafa";
import {PortfolioProjects} from './PortfolioProjects';
import ContactMafa from './ContactMafa';
import Footer from './Footer';


export default class LandingPage extends Component {
  render() {
      return (
        <>
          <div className={classes.landingPage}>
            <div id="Home">
              <LandingSection />
            </div>
            <div id="About">
              <AboutMafa />
            </div>
            <div id="Portfolio">
              <PortfolioProjects />
            </div>
            <div id="Contact">
              <ContactMafa />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </>
      );
  }
}
