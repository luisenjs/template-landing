'use client';
import { hstack } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';
import { useEffect, useState } from 'react';
import {
    Select,
    SelectItem,
    SelectProvider,
} from '../ui/select.tsx';

export default function LanguageSwitcher({
    position = 'footer',
}: {
    position?: 'footer' | 'nav';
}) {
    const [currentLocale, setCurrentLocale] = useState('');

    const changeLanguage = (newLocale: string) => {
        const currentPath = window.location.pathname;
        const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');
        const newPath = `/${newLocale}${pathWithoutLocale}`;

        localStorage.setItem('len', newLocale);
        window.location.href = newPath;
    };

    useEffect(() => {
        const currentPath = window.location.pathname.split('/');
        setCurrentLocale(currentPath[1]);
    }, []);

    if (position == 'nav') {
        return (
            <SelectProvider value={currentLocale} onChange={changeLanguage}>
                <Select
                    value={currentLocale}
                    onChange={changeLanguage}
                >
                    <SelectItem value="es">ES</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                </Select>
            </SelectProvider>
        );
    }

    return (
        <div
            className={hstack({
                gap: '1rem',
                fontWeight: 'light',
            })}
        >
            <button
                className={css({
                    cursor: 'pointer',
                    textDecoration: currentLocale.startsWith('en') ? 'underline' : 'none',
                })}
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                className={css({
                    cursor: 'pointer',
                    textDecoration: currentLocale.startsWith('es') ? 'underline' : 'none',
                })}
                onClick={() => changeLanguage('es')}
            >
                Español
            </button>
        </div>
    );
}
