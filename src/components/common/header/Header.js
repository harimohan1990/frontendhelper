import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Hook to keep track of window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the appropriate styles based on window width
  const getResponsiveStyles = () => {
    if (windowWidth <= 480) { // Mobile
      return {
        header: { flexDirection: 'column', alignItems: 'flex-start' },
        logo: { fontSize: '20px' },
        navList: { flexDirection: 'column', alignItems: 'flex-start', gap: '10px' },
        navItem: { fontSize: '14px' },
      };
    } else if (windowWidth <= 768) { // Tablet
      return {
        navList: { flexDirection: 'column', alignItems: 'center' },
        navItem: { fontSize: '16px' },
      };
    } else { // Desktop and larger
      return {
        navList: { flexDirection: 'row', gap: '15px' },
        navItem: { fontSize: '18px' },
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <header style={{ ...styles.header, ...responsiveStyles.header }}>
      <div style={{ ...styles.logo, ...responsiveStyles.logo }}>Frontend Interview Portal</div>
      <nav style={styles.nav}>
        <ul style={{ ...styles.navList, ...responsiveStyles.navList }}>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="./HtmlInterview" style={styles.navLink}>Html Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/CssInterview" style={styles.navLink}>Css Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/JavaScriptInterview" style={styles.navLink}>JavaScript Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/TypeScriptInterview" style={styles.navLink}>TypeScript Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/ReactInterview" style={styles.navLink}>ReactJs Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/NextInterview" style={styles.navLink}>NextJs Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/DSA" style={styles.navLink}>DSA Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/SystemDesign" style={styles.navLink}>System Design Interview</Link>
          </li>
          <li style={{ ...styles.navItem, ...responsiveStyles.navItem }}>
            <Link to="/Machinecode" style={styles.navLink}>Machine Coding Interview</Link>
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
