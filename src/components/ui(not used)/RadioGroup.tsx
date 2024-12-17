// src/components/ui/RadioGroup.tsx
import React from 'react';

interface RadioGroupItemProps {
  value: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, checked, onChange, children }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio"
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children }) => {
  return <div>{children}</div>;
};

export { RadioGroup, RadioGroupItem };
