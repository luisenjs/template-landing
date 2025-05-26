import * as React from "react";
import { css, cx, cva, type RecipeVariantProps } from "../../../styled-system/css";

type DivProps = React.HTMLAttributes<HTMLDivElement> & {
  innerRef?: React.Ref<HTMLDivElement>;
};

// Card base como `styled`
const cardStyles = cva({
  base: {
    padding: "1rem",
    rounded: "lg",
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    clickable: {
      true: { cursor: "pointer" },
    },
    shadowBorder: {
      none: {},
      subtle: {
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      },
      low: {
        boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 6px",
      },
      medium: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      strong: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
    spacing: {
      none: {},
      light: {
        padding: "8",
      },
    },
  },
  defaultVariants: {
    clickable: false,
    shadowBorder: "strong",
    spacing: "none",
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> & RecipeVariantProps<typeof cardStyles> & DivProps

export const Card = ({ clickable, shadowBorder, spacing, className, innerRef, ...props }: CardProps) => {
  return <div className={cx(cardStyles({ clickable, shadowBorder, spacing }), className)} ref={innerRef} {...props}></div>
};

// Subcomponentes con css()
export const CardHeader = ({ className, innerRef, ...props }: DivProps) => (
  <div
    ref={innerRef}
    className={cx(
      css({
        display: "flex",
        flexDir: "column",
        gap: "1.5",
        p: "1.5",

      }),
      className
    )}
    {...props}
  />
);

export const CardTitle = ({ className, innerRef, ...props }: DivProps) => (
  <div
    ref={innerRef}
    className={cx(
      css({
        fontWeight: "semibold",
        lineHeight: "none",
        letterSpacing: "tight",
        paddingBottom: '1.5'

      }),
      className
    )}
    {...props}
  />
);

export const CardDescription = ({
  className,
  innerRef,
  ...props
}: DivProps) => (
  <div
    ref={innerRef}
    className={cx(
      css({
        fontSize: "sm",
        color: "grey",
      }),
      className
    )}
    {...props}
  />
);

export const CardContent = ({ className, innerRef, ...props }: DivProps) => (
  <div
    ref={innerRef}
    className={cx(
      css({
        p: "1",
        pt: "0",
      }),
      className
    )}
    {...props}
  />
);

export const CardFooter = ({ className, innerRef, ...props }: DivProps) => (
  <div
    ref={innerRef}
    className={cx(
      css({
        display: "flex",
        alignItems: "center",
        p: "1",
        pt: "0",
      }),
      className
    )}
    {...props}
  />
);
