import React from 'react'
import styles from '../Styles/App.module.css'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
const LandingPage = ({show, menu}) => {
    return(
    <div className= {styles.landingPageContainer}>
     <div className= {styles.landingContainer}>
      <h1 className= {styles.heading}>Explore the possibilities</h1>
      <h1 className= {styles.heading}>of Budgeting with Echo Software</h1>
      <p>Unleash the power of healthy budgeting within Echo Budgeting. Upgrade your budgeting potential with Echo, the budget app made for losers</p>
     <button className= {styles.getStarted}>Get Started</button>
     </div>
     </div>
    )
}

export default LandingPage