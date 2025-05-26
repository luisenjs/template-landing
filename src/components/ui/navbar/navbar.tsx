import LanguageSwitcher from '../../common/languageSwithcher.tsx';
import { css } from '../../../../styled-system/css';
import { containerStyles, navbarStyles } from './navbar.style.ts';
import ThemeSwitcher from '../../common/theme-switcher.tsx';
import React, { useEffect, useState } from 'react';
import { HoverUnderlined } from '../../animations/hover-underlined.tsx';
import { hstack } from '../../../../styled-system/patterns/hstack';
import MobileNavbar from './mobile-navbar.tsx';

type Content = {
    links: {
        label: string,
        status: boolean,
        href: string
    }[]
}

export default function Navbar({ links }: Content) {

    const [len, setLen] = useState<string | null>(null);

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        setLen(localStorage.getItem("len"));
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = null;
            sections.forEach((section) => {
                const sectionSize = section.getBoundingClientRect();
                if (sectionSize.top <= 50 && sectionSize.bottom >= 150) {
                    currentSection = section.id;
                }
            })
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={containerStyles}>
            <nav className={navbarStyles} aria-label="Main navigation">
                <a href={`/${len}`} className="logo">
                    <img
                        src={'/sasf-logo/logo.svg'}
                        alt="logo-sasf"
                        width={100}
                        height={100}
                        loading="lazy"
                        className={css({
                            w: { base: '50px', md: '100px' },
                            h: 'auto',
                            objectFit: 'cover',
                        })}
                    />
                </a>
                <ul className={hstack({
                    display: { base: "none", md: "flex" },
                    overflow: "hidden"
                })}>
                    {links.map(item => {
                        return (
                            <React.Fragment key={item.href}>
                                {item.status && (
                                    <li>
                                        <HoverUnderlined isOnSection={activeSection === item.href.substring(2)} >
                                            <div
                                                className="navLink"
                                                onClick={() => {
                                                    const section = document.getElementById(item.href.substring(2));
                                                    if (section) {
                                                        section.scrollIntoView({ behavior: "smooth" });
                                                    } else {
                                                        window.location.replace(`/${len}` + item.href);
                                                    }
                                                }}>
                                                {item.label}
                                            </div>
                                        </HoverUnderlined>
                                    </li>
                                )}
                            </React.Fragment>
                        );
                    })}
                </ul>
                <div className={css({
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center"
                })}>
                    <ThemeSwitcher />
                    <LanguageSwitcher position="nav" />
                    <MobileNavbar links={links} />
                </div>
            </nav>
        </section>
    );
}
