// src/components/ui/Slider.tsx
import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onValueChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onValueChange }) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className="slider"
      />
      <span>{value}</span>
    </div>
  );
};

export { Slider };
