// src/components/ui/Label.tsx
import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export { Label };

// Similar for RadioGroup, Slider, Checkbox, etc.
