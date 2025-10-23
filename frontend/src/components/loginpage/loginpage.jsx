import React, { useState } from 'react';
import styles from './loginpage.module.css';

import user_icon from '../assests2/person.png';
import email_icon from '../assests2/email.png';
import password_icon from '../assests2/password.png';

const LoginPage = () => {
  // Correcting the initial state value to "Sign Up" to match the default action in the UI.
  const [action, setAction] = useState("Sign Up");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        
       
        {action === "Sign Up" && (
          <div className={styles.input}>
            <img src={user_icon} alt="User icon" /> {/* Added descriptive alt text */}
            <input type="text" placeholder='Name' />
          </div>
        )}
        
        <div className={styles.input}>
          <img src={email_icon} alt="Email icon" /> {/* Added descriptive alt text */}
          <input type="email" placeholder='Email' />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="Password icon" /> {/* Added descriptive alt text */}
          <input type="password" placeholder='Password' />
        </div> 
      </div>
      
      {/* The forgot password link should only show when the action is 'Login' */}
      {action === "Login" && (
        <div className={styles['forgot-password']}> 
          {/* Used bracket notation for class name with a hyphen */}
          Forgot Password? <span>Click Here!</span> 
        </div>
      )}
      
      {/* Applied styles.submit-container to the container */}
      <div className={styles['submit-container']}>
        {/* Corrected logic and class name usage */}
        <div 
          className={`${styles.submit} ${action === "Login" ? styles.gray : ''}`} 
          onClick={() => { setAction("Sign Up") }}
        >
          Sign Up
        </div>
        
        {/* Corrected logic and class name usage */}
        <div 
          className={`${styles.submit} ${action === "Sign Up" ? styles.gray : ''}`} 
          onClick={() => { setAction("Login") }}
        >
          Login
        </div>
      </div>
    </div>
  )
}

export default LoginPage;