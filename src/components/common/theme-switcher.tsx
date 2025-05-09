'use client'

import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    return (
        <button onClick={toggleTheme} className={css({ color: { base: "black", _dark: "white" }, transition: "all 0.5s" })}>
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}