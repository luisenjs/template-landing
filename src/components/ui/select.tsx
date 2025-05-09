'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { css, cva } from '../../../styled-system/css';


export const selectTriggerStyles = cva({
    base: {
      display: 'flex',
      height: 'fit-content',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      whiteSpace: 'nowrap',
      borderRadius: 'sm',
      border: '1px solid',
      borderColor: 'sasfWhite',
      color:'sasfWhite',
      bg: 'transparent',
      px: '.5rem',
      py: '.1rem',
      fontSize: 'sm',
      boxShadow: 'sm',
      gap:'.4rem',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
        ring: '1px',
        ringColor: 'ring',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      '& > span': {
        lineClamp: 1,
      },
    },
  });
  
  export const selectContentStyles = cva({
    base: {
      position: 'absolute',
      zIndex: 50,
      top: '100%',
      left: 0,
      right: 0,
      p:'.2rem',
      maxHeight: '384px',
      minWidth: 'fit-content',
      overflow: 'auto',
      borderRadius: 'sm',
      border: '1px solid',
      borderColor: 'border',
      bg: 'sasfWhite',
      color: 'sasfGrey',
      boxShadow: 'md',
      mt: '4px',
    },
  });
  
  export const selectItemStyles = cva({
    base: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center',
      borderRadius: 'sm',
      py: '.2rem',
      pl: '8px',
      fontSize: 'sm',
      outline: 'none',
      '&:hover': {
        bg: 'lightRed',
        color: 'primaryRed',
      },
      '&[data-disabled]': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
    },
  });
  
  export const selectLabelStyles = cva({
    base: {
      px: '8px',
      py: '6px',
      fontSize: 'sm',
      fontWeight: 'semibold',
    },
  });
  
  export const selectSeparatorStyles = cva({
    base: {
      mx: '-4px',
      my: '4px',
      height: '1px',
      bg: 'muted',
    },
  });
  
  

interface SelectProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ value, placeholder, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={css({ position: 'relative' })}>
      <div
        className={selectTriggerStyles()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={css({textTransform:'uppercase'})}>{value || placeholder}</span>
        {isOpen ? (
          <ChevronUp className={css({ height: '16px', width: '16px', opacity: 0.5 })} />
        ) : (
          <ChevronDown className={css({ height: '16px', width: '16px', opacity: 0.5 })} />
        )}
      </div>
      {isOpen && (
        <div className={selectContentStyles()}>
          {children}
        </div>
      )}
    </div>
  );
};

interface SelectItemProps {
  value: string
  children: React.ReactNode
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('SelectItem must be used within a Select');
  }

  const { selectedValue, onSelect } = context;

  return (
    <div
      className={selectItemStyles()}
      onClick={() => onSelect(value)}
    >
      {children}
      {selectedValue === value && (
        <span className={css({ position: 'absolute', right: '8px', display: 'flex', height: '14px', width: '14px', alignItems: 'center', justifyContent: 'center' })}>
          <Check className={css({ height: '16px', width: '16px' })} />
        </span>
      )}
    </div>
  );
};

export const SelectLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={selectLabelStyles()}>{children}</div>
);

export const SelectSeparator: React.FC = () => (
  <div className={selectSeparatorStyles()} />
);

interface SelectContextType {
  selectedValue: string
  onSelect: (value: string) => void
}

const SelectContext = React.createContext<SelectContextType | null>(null);

export const SelectProvider: React.FC<SelectProps & { children: React.ReactNode }> = ({ value, onChange, children }) => {
  return (
    <SelectContext.Provider value={{ selectedValue: value, onSelect: onChange }}>
      {children}
    </SelectContext.Provider>
  );
};

