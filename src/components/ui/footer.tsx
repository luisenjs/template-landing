import { socialLinks } from "../../constants/nav-footer.ts";
import React from "react";
import { css } from "../../../styled-system/css";
import LanguageSwitcher from "../common/languageSwithcher.tsx";
import { container } from "../../../styled-system/patterns/container";

type footerProps = {
    links: {
        label: string;
        status: boolean;
        href: string;
    }[]
    footer: {
        description: string;
        copyright: string;
    }
};

export default function Footer({ links, footer }: footerProps) {

    return (
        <footer className={footerStyles}>
            <div className={container({
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",

                "& .center": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                },

                md: {
                    gridTemplateColumns: "1fr 1fr 1fr",
                },
            },)}>
                <div>
                    <p className={"description"}>{footer.description}</p>
                </div>
                <div className="center">
                    <a href="/" className={"logo"}>
                        <img src={"/sasf-logo/logo.svg"} width={120} height={50} alt="logo-sasf" />
                    </a>
                    <section className={"socialLinks"}>
                        {socialLinks.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className={"socialLink"}
                                aria-label={label}
                            >
                                <Icon className={css({ w: "22px" })} />
                            </a>
                        ))}
                    </section>
                </div>

                <div
                    className={css({
                        gridRow: { base: "1 / 2", md: "auto" },
                        display: { base: "block", md: "flex" },
                        justifyContent: "space-evenly",
                    })}
                >
                    <div>
                        <ul className={"navLinks"}>
                            {links.slice(0, 3).map((item) => (
                                <React.Fragment key={item.href}>
                                    {item.status && (
                                        <li>
                                            <a href={item.href} className={"navLink"}>
                                                {item.label}
                                            </a>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className={"navLinks"}>
                            {links.slice(3).map((item) => (
                                <React.Fragment key={item.href}>
                                    {item.status && (
                                        <li>
                                            <a href={item.href} className={"navLink"}>
                                                {item.label}
                                            </a>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"copyright"}>
                © {new Date().getFullYear()} {footer.copyright}
                <div className={css({ "display": 'flex' })}>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}

export const footerStyles = css({
    position: "relative",
    bg: "gray.900",
    color: "white",
    padding: "3rem 0rem 1rem",
    transition: "all 0.2s",

    "& .logo": {
        width: "7.5rem",
        height: "auto",
        marginBottom: "1.5rem",
    },
    "& .description": {
        color: "#a1a1a1",
        fontSize: "0.9rem",
        lineHeight: "1.6",
        maxWidth: "25rem",
    },
    "& .socialLinks": {
        display: "flex",
        gap: "1rem",
        marginTop: "1.5rem",
        "& .socialLink": {
            color: "white",
            transition: "opacity 0.2s",

            _hover: {
                opacity: 0.7,
            },
        },
    },
    "& .navLinks": {
        listStyle: "none",
        padding: 0,
        margin: 0,
        "& .navLink": {
            color: "#a1a1a1",
            textDecoration: "none",
            fontSize: "0.9rem",
            lineHeight: "2",
            transition: "color 0.2s",

            _hover: {
                color: "white",
            },
        },
    },
    "& .copyright": {
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        textAlign: "center",
        color: "#666",
        fontSize: "0.8rem",
        paddingTop: "2rem",
        marginTop: "2rem",
        borderTop: "1px solid #333",
        paddingRight: "1vh",
        pl: "1rem",
        pr: "1rem"
    },
});
