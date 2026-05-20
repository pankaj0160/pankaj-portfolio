import React from 'react';
import { IconContext } from 'react-icons';

const IconWrapper = ({ children, size = 24, className = '' }) => {
  return (
    <IconContext.Provider value={{ size, className }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconWrapper;