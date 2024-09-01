import React, { useState, useEffect } from 'react';

const Footer = () => {
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
        footerText: { fontSize: '12px' },
        footerLink: { fontSize: '10px' },
      };
    } else if (windowWidth <= 768) { // Tablet
      return {
        footerText: { fontSize: '14px' },
        footerLink: { fontSize: '12px' },
      };
    } else { // Desktop
      return {
        footerText: { fontSize: '16px' },
        footerLink: { fontSize: '14px' },
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={{ ...styles.footerText, ...responsiveStyles.footerText }}>
          <p>Made with ❤️ for Indian Developers</p>
        </div>
        <div style={styles.footerLinks}>
          <a
            href="https://www.linkedin.com/in/hari-mohan-prajapat-47299b54/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.footerLink, ...responsiveStyles.footerLink }}
          >
          Lets meet here  LinkedIn Profile
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'rgb(40, 44, 52)', // corrected background-color syntax
    padding: '20px',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  footerText: {
    fontWeight: '300',
  },
  footerLinks: {
    marginTop: '10px',
  },
  footerLink: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Footer;
