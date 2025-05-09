'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';

export const BackToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={scrollTopStyles}
            data-state={showScrollTop ? 'visible' : ''}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export const scrollTopStyles = css({
    zIndex: 10,
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: 'sasfWhite',
    color: 'black',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: 0,
    visibility: 'hidden',
    border: 'none',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBlock: '2rem',
    '&[data-state=visible]': {
        opacity: 1,
        visibility: 'visible',
    },

    _hover: {
        transform: 'translateY(-3px)',
        backgroundColor: '#f0f0f0',
    },
});
