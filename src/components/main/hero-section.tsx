import { css } from "../../../styled-system/css";
import { container, stack } from "../../../styled-system/patterns";
import FlipCard from "../animations/flip-card";
import { CardContent, CardDescription } from "../ui/card";

type Content = {
    heading: string;
    description: string;
};

const heroStyles = container({
    width: "100svw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "& .heroVideo": {
        position: "fixed",
        top: 0,
        right: 0,
        width: "100svw",
        height: "100svh",
        objectPosition: "center",
        objectFit: "cover",
        zIndex: -2,
    },
});

export default function HeroSection(contenido: Content) {
    return (
        <section className={heroStyles}>
            <div
                className={stack({
                    flexDir: { base: "column", md: "row" },
                    alignItems: { base: "", md: "center" }
                })}
            >
                <h1
                    className={css({
                        w: { base: "full", md: "1/2" },
                        fontSize: { base: "3xl", md: "6xl" },
                        fontWeight: 500,
                        color: "text",
                        transition: "all 0.2s",
                    })}
                >
                    {contenido.heading}
                </h1>
                <div className={css({ display: { base: "none", md: "block" }, w: { base: "full", md: "1/2" } })}>
                    <FlipCard front={
                        <CardContent className={css({ width: "full", display: "flex", flexDir: "column", gap: "5", py: "6" })}>
                            <img src="hero.svg" alt="hero image" />
                        </CardContent>
                    } back={
                        <CardContent className={css({ width: "full", display: "flex", flexDir: "column", gap: "5", py: "6" })}>
                            <CardDescription>
                                <p className={css({
                                    color: "text",
                                    fontSize: "2xl"
                                })}>
                                    {contenido.description}
                                </p>
                            </CardDescription>
                        </CardContent>
                    } />
                </div>
                <div className={css({ display: { base: "block", md: "none" } })}>
                    <img src="hero.svg" alt="hero.img" className={css({ w: "full" })} />
                </div>
                <p className={css({ display: { base: "block", md: "none" }, color: "text", transition: "all 0.2s" })}>
                    {contenido.description}
                </p>
            </div>
        </section>
    )
}
