import type { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { cva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

type LevelHedings =
  | 'primary'
  | 'primarySub'
  | 'secondary'
  | 'secondarySub'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'
  | 'senary';

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level: LevelHedings;
}

const headingStyles = cva({
  base: {},
  variants: {
    level: {
      primary: {
        fontSize: {
          base:'2rem',
          sm: '2.5rem',
          md: '3rem',
          lg: '3.5rem',
          xl: '4rem',
          '2xl': '4.5rem',
        },
        textTr: '',
        fontWeight: 600,
        lineHeight: {
          sm: '2.5rem', // 24px
          md: '3rem', // 32px
          lg: '3.5rem', // 48px
          xl: '5rem', // 64px
          '2xl': '5rem', // 80px
        },
        textTransform: 'capitalize',
      },
      primarySub: {
        fontWeight: '700',
        fontSize: {
          base:'1.75rem',
          sm: '1.75rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '3.5rem',
        },
        lineHeight: {
          sm: '2.25rem', // 36px
          md: '2.5rem', // 40px
          lg: '3rem', // 48px
          xl: '3.5rem', // 56px
          '2xl': '4rem', // 64px
        },
        textTransform: 'uppercase'
      },
      secondary: {
        textTransform: 'lowercase',
        _firstLetter:{textTransform: 'uppercase',},
        fontSize: {
          base:'2rem',
          sm: '2rem',
          md: '2rem',
          lg: '2rem',
          xl: '2.25rem',
          '2xl': '2.5rem',
        },
        lineHeight: {
          sm: '2rem', // 32px
          md: '2.25rem', // 36px
          lg: '2.5rem', // 40px
          xl: '2.75rem', // 44px
          '2xl': '3rem', // 48px
        },
      },
      secondarySub: {
        fontSize: {
          base:'1.25rem',
          sm: '1.25rem',
          md: '1.5rem',
          lg: '1.5rem',
          xl: '1.75rem',
          '2xl': '2em',
        },
        lineHeight: {
          sm: '1.75rem', // 28px
          md: '2rem', // 32px
          lg: '2.25rem', // 36px
          xl: '2.5rem', // 40px
          '2xl': '2.75rem', // 44px
        },
      },
      tertiary: {
        fontSize: {
          base:'1.2rem',
          sm: '1.2rem',
          md: '1.25rem',
          lg: '1.5rem',
          xl: '1.75rem',
          '2xl': '2rem',
        },
        lineHeight: {
          sm: '1.5rem', // 24px
          md: '1.75rem', // 28px
          lg: '2rem', // 32px
          xl: '2.25rem', // 36px
          '2xl': '2.5rem', // 40px
        },
      },
      quaternary: {
        fontSize: {
          base: '0.875rem',
          sm: '0.875rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
        },
        lineHeight: {
          sm: '1.25rem', // 20px
          md: '1.5rem', // 24px
          lg: '1.75rem', // 28px
          xl: '2rem', // 32px
          '2xl': '2.25rem', // 36px
        },
      },
      quinary: {
        fontSize: {
          base:'0.75rem',
          sm: '0.75rem',
          md: '0.875rem',
          lg: '1rem',
          xl: '1.125rem',
          '2xl': '1.25rem',
        },
        lineHeight: {
          sm: '1rem', // 16px
          md: '1.25rem', // 20px
          lg: '1.5rem', // 24px
          xl: '1.75rem', // 28px
          '2xl': '2rem', // 32px
        },
      },
      senary: {
        fontSize: {
          base: '0.625rem',
          sm: '0.625rem',
          md: '0.75rem',
          lg: '0.875rem',
          xl: '1rem',
          '2xl': '1.125rem',
        },
        lineHeight: {
          sm: '0.875rem', // 14px
          md: '1rem', // 16px
          lg: '1.25rem', // 20px
          xl: '1.5rem', // 24px
          '2xl': '1.75rem', // 28px
        },
      },
    },
  },
  defaultVariants: {
    level: 'primary',
  },
});

export const Heading = ({
  className,
  level,
  children,
  ...rest
}: HeadingProps) => {
  let tag: keyof JSX.IntrinsicElements;
  switch (level) {
    case 'primary':
      tag = 'h1';
      break;
    case 'primarySub':
      tag = 'h2';
      break;
    case 'secondary':
      tag = 'h2';
      break;
    case 'secondarySub':
      tag = 'h2';
      break;
    case 'tertiary':
      tag = 'h3';
      break;
    case 'quaternary':
      tag = 'h4';
      break;
    case 'quinary':
      tag = 'h5';
      break;
    case 'senary':
      tag = 'h6';
      break;
    default:
      tag = 'h1';
  }

  const HeadingStyles = styled(tag, headingStyles);

  return (
    <HeadingStyles
      level={level}
      className={className}
      {...rest}>
      {children}
    </HeadingStyles>
  );
};
