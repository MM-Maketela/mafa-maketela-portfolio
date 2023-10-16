import React from 'react'
import classes from './Card_3x4.module.css'
export const Card_3x4 = (props) => {
    const {image} = props
  return (
    <div className={classes.card}>
      <div className={classes.innerContainer}>
          


          <div className={classes.cardInnerContainer}>

            <div className={classes.image}>
            <img  src={image}  alt='project  image' id={classes.image}/>
            </div>



        <div className={classes.infoContainer}>
        <div  className={classes.headerContainer}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.type}>{props.type}</div>
        </div>


        <div className={classes.info}>
          {props.message}
        </div>

        </div>

          

          </div>
          

      </div>
    
    </div>
  )
}
