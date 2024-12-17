// src/components/ui/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, children }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export { Checkbox };
