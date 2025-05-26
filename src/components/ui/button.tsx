import * as React from "react"
import { cva, cx, type RecipeVariantProps } from "../../../styled-system/css"

const buttonStyle = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        whiteSpace: "nowrap",
        rounded: "md",
        fontSize: "sm",
        fontWeight: "medium",
        transition: "colors",
        _focusVisible: {
            outline: "none",
            ring: "1px",
            ringColor: "ring",
        },
        _disabled: {
            pointerEvents: "none",
            opacity: "0.5",
        },
        "& svg": {
            pointerEvents: "none",
            width: "4",
            height: "4",
            flexShrink: "0",
        },
    },
    variants: {
        variant: {
            default: {
                bg: "primary",
                color: "primary-foreground",
                boxShadow: "sm",
                _hover: {
                    bg: "primary/90",
                },
            },
            destructive: {
                bg: "destructive",
                color: "destructive-foreground",
                boxShadow: "sm",
                _hover: {
                    bg: "destructive/90",
                },
            },
            outline: {
                border: "1px solid",
                borderColor: "input",
                bg: "background",
                boxShadow: "sm",
                _hover: {
                    bg: "accent",
                    color: "accent-foreground",
                },
            },
            secondary: {
                bg: "secondary",
                color: "secondary-foreground",
                boxShadow: "sm",
                _hover: {
                    bg: "secondary/80",
                },
            },
            ghost: {
                _hover: {
                    bg: "accent",
                    color: "accent-foreground",
                },
            },
            link: {
                color: "primary",
                textUnderlineOffset: "4",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
        size: {
            default: {
                h: "9",
                px: "4",
                py: "2",
            },
            sm: {
                h: "8",
                rounded: "md",
                px: "3",
                fontSize: "xs",
            },
            lg: {
                h: "10",
                rounded: "md",
                px: "8",
            },
            icon: {
                h: "9",
                w: "9",
            },
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type ButtonPropsBase = RecipeVariantProps<typeof buttonStyle>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonPropsBase & {
        ref?: React.RefObject<HTMLButtonElement>;
    };

const Button = ({ className, variant, size, ref, ...props }: ButtonProps) => {
    return <button className={cx(buttonStyle({ variant, size }), className)} ref={ref} {...props} />
}
Button.displayName = "Button"

export { Button, buttonStyle }
