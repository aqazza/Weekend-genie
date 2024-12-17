// src/components/ui/Input.tsx
import React from 'react';

interface InputProps {
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
  return <input type={type} value={value} onChange={onChange} className="input" />;
};

export { Input };
