import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-120px";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="navbar" style={styles.header}>
      <div style={styles.logo}>Frontend Interview Portal</div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/HtmlInterview" style={styles.navLink}>Html </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/CssInterview" style={styles.navLink}>Css </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/JavaScriptInterview" style={styles.navLink}>JavaScript </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/TypeScriptInterview" style={styles.navLink}>TypeScript</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/ReactInterview" style={styles.navLink}>ReactJs</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/NextInterview" style={styles.navLink}>NextJs</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/DSA" style={styles.navLink}>DSA</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/SystemDesign" style={styles.navLink}>System Design </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Machinecode" style={styles.navLink}>Machine Coding </Link>
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
    transition: 'top 0.3s', // Smooth transition for hiding/showing header
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
