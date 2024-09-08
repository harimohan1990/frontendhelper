import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <header style={{ ...styles.header }}>
      <div style={{ ...styles.logo}}>Frontend Interview Portal</div>
      <nav style={styles.nav}>
        <ul style={{ ...styles.navList}}>
          <li style={{ ...styles.navItem}}>
            <Link to="./HtmlInterview" style={styles.navLink}>Html </Link>
          </li>
          <li style={{ ...styles.navItem, }}>
            <Link to="/CssInterview" style={styles.navLink}>Css</Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/JavaScriptInterview" style={styles.navLink}>JavaScript </Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/TypeScriptInterview" style={styles.navLink}>TypeScript </Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/ReactInterview" style={styles.navLink}>ReactJs </Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/NextInterview" style={styles.navLink}>NextJs </Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/DSAInterview" style={styles.navLink}>DSA</Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/SystemDesign" style={styles.navLink}>System Design </Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="/Machinecode" style={styles.navLink}>Machine Coding</Link>
          </li>
          <li style={{ ...styles.navItem}}>
            <Link to="GitInterview"  style={styles.navLink}>Git Commands</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
  },
  navItem: {
    fontSize: '18px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Header;
