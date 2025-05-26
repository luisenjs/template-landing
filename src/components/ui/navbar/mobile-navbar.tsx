'use client';

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { socialLinks } from '../../../constants/nav-footer';
import { css } from '../../../../styled-system/css';
import LanguageSwitcher from '../../common/languageSwithcher';
import { center, hstack, vstack } from '../../../../styled-system/patterns';

type Content = {
  links: {
    label: string;
    status: boolean;
    href: string;
  }[];
};

export default function MobileNavbar({ links }: Content) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={css({ color: "navText", transition: "all 0.2s", display: { base: "block", md: "none" } })}
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={css({
        display: { base: "block", md: "none" },
        position: "fixed",
        top: "3.9rem",
        left: 0,
        w: "full",
        bg: "navbar",
        borderTop: "1px solid",
        borderColor: "navBorder",
        transition: 'all 0.5s ease',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
      })}>
        <div className={vstack({ gap: "5", p: "5" })}>
          <ul className={vstack()}>
            {links.map(item => (
              <React.Fragment key={item.href}>
                {item.status && (
                  <li>
                    <div
                      className={css({ color: "navText", transition: "all 0.2s" })}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const section = document.getElementById(item.href.substring(2));
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.location.replace(item.href);
                        }
                      }}>
                      {item.label}
                    </div>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div className={hstack()}>
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}>
                <Icon className={css({ w: '22px', color: "navText", transition: "all 0.2s" })} />
              </a>
            ))}
          </div>
          <div className={center({ color: 'text', opacity: 0.7 })}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
