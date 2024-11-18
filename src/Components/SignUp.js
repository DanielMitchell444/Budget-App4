import React from 'react';
import styles from '../Styles/App.module.css';

import { useState } from 'react';

const SignUp = ({ data, onChange, onSubmit, error, generalError }) => {

  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if(currentStep < 3){
      setCurrentStep(currentStep + 1)
    }
  }

  const handeBack = () => {
    if(currentStep > 1){
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <div className={styles.wrappedContainer}>
      <div className={styles.containerSignUp}>
        <div className={styles.content}>
          <h2>
          {
           currentStep === 1 ?
           "Personal Information":
           currentStep === 2 ?
           "Account Setup"
           : "Contact Information"
          }

          </h2>
          {generalError && <p className={styles.error}>{generalError}</p>}
            {/* Progress Indicator */}
            <div className={styles.progressIndicator}>
            <div
              className={`${styles.step} ${
                currentStep >= 1 ? styles.active : ""
              }`}
            >
              1
            </div>
            <div
              className={`${styles.line} ${
                currentStep >= 2 ? styles.completed : ""
              }`}
            ></div>
            <div
              className={`${styles.step} ${
                currentStep >= 2 ? styles.active : ""
              }`}
            >
              2
            </div>
            <div
              className={`${styles.line} ${
                currentStep >= 3 ? styles.completed : ""
              }`}
            ></div>
            <div
              className={`${styles.step} ${
                currentStep >= 3 ? styles.active : ""
              }`}
            >
              3
            </div>
          </div>
</div>
          <form className={styles.form} onSubmit={onSubmit}>
            {currentStep === 1 && (
            <div className={styles.doubleForm}>
              <div className={styles.inputFields2}>
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="FirstName"
                  value={data.FirstName}
                  onChange={onChange}
                />
                {error.FirstName && <p className={styles.error}>{error.FirstName}</p>}
              </div>

              <div className={styles.inputFields2}>
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="LastName"
                  value={data.LastName}
                  onChange={onChange}
                />
                {error.LastName && <p className={styles.error}>{error.LastName}</p>}
              </div>

            <div className={styles.inputFields2}>
                <label htmlFor="Birthday">Birthday</label>
                <input
                  type="date"
                  name="Birthday"
                  placeholder='Enter a Birthday'
                  value={data.Birthday}
                  onChange={onChange}
                />
                {error.Birthday && <p className={styles.error}>{error.Birthday}</p>}
              </div>
              </div>
            )}

            {currentStep === 2 && (

            <div className={styles.doubleForm}>
              <div className={styles.inputFields2}>
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="Username"
                  value={data.Username}
                  onChange={onChange}
                />
                {error.Username && <p className={styles.error}>{error.Username}</p>}
              </div>

              <div className={styles.inputFields2}>
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  value={data.Password}
                  onChange={onChange}
                />
                {error.Password && <p className={styles.error}>{error.Password}</p>}
              </div>
              </div>

            )}

            {currentStep === 3 && (

            <div className={styles.doubleForm}>
              <div className={styles.inputFields2}>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  value={data.Email}
                  onChange={onChange}
                />
                {error.Email && <p className={styles.error}>{error.Email}</p>}
              </div>

  
            </div>

            )}

            {currentStep > 1 && (
            <button
            type = "button"
            className= {styles.button}
            onClick={handeBack}
            >
              Back
            </button>

            )}

            {currentStep < 3 ? (
              <button
              type = "button"
              className= {styles.button}
              onClick={handleNext}
              >Next</button>
            ): (
              <div className={styles.inputFields}>
              <input type="submit" value="Sign Up" />
            </div>
            )}
          </form>
        </div>
      </div>
  );
};

export default SignUp;
