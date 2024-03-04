import React, { Component} from 'react';
import classes from './LandingPage.module.css';
import backgroundImage from '../../Assets/Images/IMG_9565.jpeg';


export default class LandingSection extends Component {
  render() {
    return (
      <>
        <div className={classes.flexContainer}>
          <div className={classes.backgroundContainer}>
            <img
              src={backgroundImage}
              alt="MAFA MAKETELA"
              className={classes.myBackgroundImage}
            />
          </div>
            <div className={classes.flexItem1}>
            <div className={classes.myName}> MAFA MAKETELA</div>
            <div className={classes.softText}>Web & Android app developer</div>
          </div>
        </div>
      </>
    );
  }
}
