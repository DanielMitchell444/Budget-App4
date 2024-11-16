import React from 'react';
import styles from '../Styles/App.module.css';

const SignUp = ({ data, onChange, onSubmit, error, generalError }) => {
  return (
    <div className={styles.wrappedContainer}>
      <div className={styles.containerSignUp}>
        <div className={styles.content}>
          <h2>Sign Up</h2>
          {generalError && <p className={styles.error}>{generalError}</p>}

          <form className={styles.form} onSubmit={onSubmit}>
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
            </div>

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

              <div className={styles.inputFields2}>
                <label htmlFor="Birthday">Birthday</label>
                <input
                  type="date"
                  name="Birthday"
                  value={data.Birthday}
                  onChange={onChange}
                />
                {error.Birthday && <p className={styles.error}>{error.Birthday}</p>}
              </div>
            </div>

            <div className={styles.inputFields}>
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
