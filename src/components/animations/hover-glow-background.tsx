'use client'

import { useState } from "react";
import { css } from "../../../styled-system/css";

interface WrapperStyle extends React.CSSProperties {
    "--x": string;
    "--y": string;
}

type backgroundType = {
    colorFrom?: string;
    colorTo?: string;
    setBorder?: boolean;
    className?: string;
    children: React.ReactNode;
    bgColor?: string;
    round: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full"
}

export function HoverGlowBackground({ colorFrom = "rgba(228, 8, 12, 0.4)", colorTo = "rgba(6, 2, 112, 0.4)", children, bgColor = "white", round }: backgroundType) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        setMouseX(clientX - left)
        setMouseY(clientY - top)
    }

    return (
        <div
            className={css({
                position: "relative",
                w: "full",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                rounded: round,
                _hover: {
                    "& .radialHover": {
                        opacity: 1,
                    }
                }
            })}
            style={{
                "--x": `${mouseX}px`,
                "--y": `${mouseY}px`
            } as WrapperStyle}
            onMouseMove={handleMouseMove}
        >
            <div className={"radialHover " + css({
                position: "absolute",
                top: 0,
                left: 0,
                w: "full",
                h: "full",
                pointerEvents: "none",
                background: `radial-gradient(300px circle at var(--x) var(--y), ${colorFrom} 10%, ${colorTo})`,
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
            })} />
            <div className={css({ m: 0.5, bg: bgColor, rounded: round, h: "full" })}>
                <div
                    className={css({
                        position: "relative",
                        width: "full",
                        h: "full",
                        overflow: "hidden",
                        rounded: round,
                        bg: "rgba(255, 255, 255, 0.7)"
                    })}
                >
                    {children}
                </div>
            </div>
        </div>

    )
}