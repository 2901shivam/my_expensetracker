import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <NavLink to='/home' className={styles.navLink}>
          Home
        </NavLink>
        <a href="#product" className={styles.navLink}>
          Product
        </a>
        <NavLink to='/' className={styles.navLink}>
          AboutUs
        </NavLink>
        <NavLink to='signup'>SignUp</NavLink>
        <NavLink to='login'>Login</NavLink>
      
        
    
      </section>
     
    </header>
  );
};

export default Header;
