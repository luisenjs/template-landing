import { css } from '../../../../styled-system/css';

export const containerStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  minHeight: '4rem',
  transition: 'all 0.3s ease',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundColor: 'navbar',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const navbarStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .logo': {
    position: 'relative',
    height: 'auto',
  },

  '& .navOptions': {
    display: 'flex',
    gap: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '& .navLinks': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    mdDown: {
      display: 'flex',
      gap: '2rem',
    },
    display: 'none',
    '& .navOptions': {
      gap: '0',
    },
  },

  '& .navLink': {
    textDecoration: 'none',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05rem',
    transition: 'opacity 0.2s',
    position: 'relative',
    color: 'sasfWhite',
    '&[data-state=active]': {
      _after: {
        content: '""',
        pointerEvents: 'none',
        bottom: '-4px',
        left: '0%',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: '#fff',
      },
    },
  },

  '& .socialLinks': {
    gap: '1rem',
    alignItems: 'center',
    display: 'none',
    mdDown: {
      display: 'flex',
    },
  },

  '& .socialLink': {
    color: 'white',
    transition: 'opacity 0.2s',
    '&:hover': {
      opacity: 0.8,
    },
  },
});

export const navbarMobileStyles = css({
  '& .burgerButton': {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',

    mdDown: {
      display: 'none',
    },
  },

  '& .mobileMenu': {
    display: 'block',
    position: 'fixed',
    top: '4.5rem',
    left: 0,
    right: 0,
    backgroundColor: 'navbarMobile',
    padding: '2rem',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease',
    mdDown: {
      display: 'none',
    },
    '@media (max-height: 400px)': {
      top: '4rem',
      padding: '1rem',
    }
  },

  '& .mobileMenuOpen': {
    transform: 'translateX(0)',
  },

  '& .mobileNavLinks': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
    alignItems: 'center',
    '@media (max-height: 400px)': {
      gap: '0.45em',
    },
  },

  '& .mobileSocialLinks': {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    '@media (max-height: 400px)': {
      marginTop: '1rem',
    }
  },

  mdDown: {
    display: 'none',
  },
});
