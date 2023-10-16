import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import mafa from '../../Assets/Images/mafaLatest.jpeg';
export default class AboutMafa extends Component {
  render() {
    return (
      <>
        <div className={classes.Section2}>
          <div className={classes.flexContainerSection2}>
            <div className={classes.mafaPic}>
              <img src={mafa} alt="mafa maketela" />
            </div>
            <div className={classes.aboutMafa}>
              <div className={classes.aboutHeadingText}>About</div>
              <div className={classes.divider}></div>
              <div className={classes.infoAboutMafa}>
                <div className={classes.infoAboutMafa1}>
                  My name is Mafa Maketela, as of 2023 I am doing my final year
                  in computer science.
                  <br />
                  <br />
                  In order to kick-start my career before I graduate, I am
                  looking for a job or internship of a android or web developer,
                  since that is what I have been doing already for a year in my
                  free time.
                  <br />
                  <br />
                  Designing and developing simple android apps and websites,
                  with the help of some open source content-management systems,
                  and so on. Besides that I am a normal guy who enjoys hiking
                  and spending time with friends, while not working or studying,
                  which takes most of my time of course. If I should pick the
                  best website I have designed up to this point, it will be this
                  one open, and incase of android application, they are
                  displayed in portfolio section. I am ambitious and
                  hard-working and believe you will give me a chance to prove my
                  words.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
