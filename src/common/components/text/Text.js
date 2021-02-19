import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';


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

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  size: 'medium',
  color: 'black',
};

export default Text;
