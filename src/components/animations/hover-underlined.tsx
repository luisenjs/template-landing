import { css } from '../../../styled-system/css';

export const HoverUnderlined = ({ children, isOnSection }: { children: React.ReactNode, isOnSection: boolean }) => {
  return <div className={`${hoverStyles} ${isOnSection ? activeStyles : ""}`}>{children}</div>;
};

const hoverStyles = css({
  color: 'text',
  opacity: 0.7,
  cursor: 'pointer',
  position: 'relative',
  border: 'none',
  background: 'none',
  textTransform: 'uppercase',
  transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
  transitionDuration: '400ms',
  transitionProperty: 'color',
  _focus: {
    opacity: 1,
  },
  _hover: {
    opacity: 1,
  },
  '&:focus:after,&:hover:after': {
    width: '100%',
    left: '0%',
  },
  _after: {
    content: '""',
    pointerEvents: 'none',
    bottom: '-2px',
    left: '50%',
    position: 'absolute',
    width: '0%',
    height: '1',
    backgroundColor: 'text',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    transitionDuration: '400ms',
    transitionProperty: 'width, left',
  },
});

const activeStyles = css({
  opacity: 1,
  _after: {
    width: '100% !important',
    left: '0% !important',
  },
});