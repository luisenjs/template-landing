'use client'

import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark';
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button onClick={toggleTheme} className={css({ color: "navText", transition: "all 0.2s" })}>
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}