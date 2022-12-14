import React, { Component } from 'react'
import classes from "./LandingPage.module.css";
import VotingFingerprintSystem from "../../Assets/Images/votingFingerprintSystem.jpg";
import musicPlayer from "../../Assets/Images/MusicPlayer.jpg";
import Cinema from "../../Assets/Images/cinema.jpg";

export default class Section3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       typeOfApp: "android app"
    }
  }
  
  render() {
    return (
      <>
        <div className={classes.Section3}>
          <div className={classes.aboutHeadingText}> portfolio</div>
          <div className={classes.divider}></div>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <img
                src={VotingFingerprintSystem}
                alt="fingerprint voting system app"
              />
              <div>
                <div className={classes.projectName}>
                  Fingerprint Voting System
                </div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  Fingerprint print voting System, an android application that
                  allows citizens to vote the party of their interest.
                  <br />
                  The app makes of the fingerprint scanner to verify vote hence
                  the name suggests.
                  <br /> the app makes use of sqlite database to store
                  information.
                </div>
                <div className={classes.myButton1}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <img src={Cinema} alt="cinema app" />
              <div>
                <div className={classes.projectName}>Cinema</div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  The cinema application allows the use to pick movies from the
                  given lists of movies and book tickes.
                  <br />The app allows the user to pick a date and also the
                  number of tickets. <br />
                  The app does not make any use of database thus does not store
                  data.
                </div>
                <div className={classes.myButton1}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <img src={musicPlayer} alt="music player app" />
              <div>
                <div className={classes.projectName}>Music Player</div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  Music player app loads all music from android device and lists
                  all on user interface.
                  <br /> The application so far has basic functionalities like
                  play, next,
                  <br /> pause and previous and still being edited for better
                  experience and is currently in use.
                </div>
                <div className={classes.myButton1}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
