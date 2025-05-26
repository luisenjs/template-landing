import { css } from '../../../../styled-system/css';
import { container } from '../../../../styled-system/patterns';

export const containerStyles = css({
  position: 'fixed!',
  top: 0,
  zIndex: "100",
  width: 'screen',
  minHeight: '4rem',
  transition: 'all 0.2s ease',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundColor: 'navbar',
  backdropFilter: "blur(20px)!",
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
});

export const navbarStyles = container({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

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

