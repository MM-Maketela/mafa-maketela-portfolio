import React, { Component, useState } from 'react'
import classes from "./LandingPage.module.css";
import VotingFingerprintSystem from "../../Assets/Images/votingFingerprintSystem.jpg";
import musicPlayer from "../../Assets/Images/MusicPlayer.jpg";
import Cinema from "../../Assets/Images/cinema.jpg";
import Sali_Eng from "../../Assets/Images/sali-eng.png";
import amalgamation from "../../Assets/Images/amalgamation.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Card} from '../../Components/card/Card.js'
import easy_shopping_store from '../../Assets/Images/easy-shopping-store.png'
import {Card_3x4} from '../../Components/card_3x4/Card_3x4.js'

export const PortfolioProjects = () => {
  let [typeOfApp, setTypeOfApp] = useState("android-app")
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <>
      <div className={classes.Section3}>
        <div className={classes.aboutHeadingText}> portfolio</div>
        <div className={classes.divider}></div>
        <div className={classes.cardContainer}>
        <Carousel  responsive = {responsive}
        autoPlay={true}
        infinite={true}
        >
          
      
          <div className={classes.elementContainer}> <Card image={easy_shopping_store} message={"E-commerce website- this website is under development is meant to help to businesses sell their products with ease online, and at a low cost."} name={"Easy Shopping"} type={"Website"}/> </div>
          <div className={classes.elementContainer}> <Card_3x4 image={Cinema}  message={"Cinema is a mini-which we created as group as part of our first project during my final year in Bsc computer science. Cinema is android app designed to allow people to buy movies tickets online."} name={"Cinema"} type={"Android application"}/> </div>
          <div className={classes.elementContainer}> <Card image={Sali_Eng} message={"Sali Eng website is design to promote a business which products and sells shelves to store different items form clothes to food and other goods. I and friends created the website using a design from client."} name={"Sali Eng"} type={"Website"}/> </div>
          <div className={classes.elementContainer}> <Card_3x4 image={musicPlayer}  message={"Music player application an app created using android studios as personal project, the app loads music from phone and allows user to use it to play music, the aim was to deploy the app on playstore but unfortunately the was lost."} name={"Music Player"} type={"Android application"}/> </div>
          <div className={classes.elementContainer}> <Card image={amalgamation} message={"Amalgamation a website designed and created sing figma and created. The website purpose is to promoted a business."} name={"Amalgamation"} type={"Website"}/> </div>
          <div className={classes.elementContainer}> <Card_3x4 image={VotingFingerprintSystem}  message={"Voting fingerprint system designed and created by my teams during my final year in computer science. The app is designed to allow people to vote using their smart phones, the app uses fingerprint as security to make sure one else but the owner votes using the app. "} name={"Voting Fingerprint System"} type={"Android application"}/> </div>
        </Carousel>
        </div>
      </div>
    </>
  )
}

