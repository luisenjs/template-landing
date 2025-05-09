import LanguageSwitcher from '../../common/languageSwithcher.tsx';
import { css } from '../../../../styled-system/css';
import { containerStyles, navbarStyles } from './navbar.style.ts';
import ThemeSwitcher from '../../common/theme-switcher.tsx';

export default function Navbar() {
    return (
        <section className={containerStyles}>
            <nav className={navbarStyles} aria-label="Main navigation">
                <a href="/" className="logo">
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
                <section className={css({
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center"
                })}>
                    <ThemeSwitcher />
                    <LanguageSwitcher position="nav" />
                </section>
            </nav>
        </section>
    );
}
