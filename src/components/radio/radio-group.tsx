'use client'
import React, { createContext } from 'react';

type RadioGroupContextType = {
  selectedValue: string;
  handleChange: (value: string) => void;
  name: string;
};

export const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export type RadioGroupProps = {
  value: string;
  onChange: (value: string) => void;
  name: string;
  children: React.ReactNode;
  classNames?: string
};

const RadioGroup = (props: RadioGroupProps) => {
  const { value, onChange, name, children, classNames = '' } = props;

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <RadioGroupContext.Provider value={{ selectedValue: value, handleChange, name }} >
      <div role="radiogroup" className={`flex items-center ${classNames}`}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;