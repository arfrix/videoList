import React from 'react';
import './Text.css';


export function Text({ size, color, children }) {
  const fontSize = () => {
    if (size === 'small') {
      return '0.75rem';
    } else if (size === 'medium') {
      return '0.875rem';
    } else if (size === 'large') {
      return '1rem';
    }
  };

  return (
    <div
      className="text-base"
      style={{
        fontSize: fontSize(),
        color,
      }}
    >
      {children}
    </div>
  );
}


export default Text;
