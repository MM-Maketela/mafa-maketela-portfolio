import React from 'react'
import classes from './Card.module.css'
export const Card = (props) => {

  const {image} = props
  return (
    <div className={classes.card}>

      <div className={classes.image}>
            <img  src={image}  alt='project  image' id={classes.image}/>
      </div>
      <div className={classes.innerContainer}>
          <div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.type}>{props.type}</div>
          </div>
          <div className={classes.info}>
          {props.message}
          </div>

      </div>
    
    </div>
  )
}
