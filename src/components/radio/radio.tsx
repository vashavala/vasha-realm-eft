import React, { useContext } from 'react';
import { RadioGroupContext } from './radio-group';

type Radio = {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const Radio = (props: Radio) => {
  const { value, disabled, children } = props;
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error('Radio must be used within a RadioGroup');
  }

  const { selectedValue, handleChange, name } = context;

  return (
    <label className={`cursor-pointer flex items-center ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => handleChange(value)}
        disabled={disabled}
        className='size-0'
      />
      <div className='w-[1rem] aspect-square rounded-full border flex items-center justify-center bg-transparent mr-[.5rem]'>
        {selectedValue === value && <div className='size-[50%] rounded-full bg-white'></div>}
      </div>
      <span>{children}</span>
    </label>
  );
};

export default Radio;