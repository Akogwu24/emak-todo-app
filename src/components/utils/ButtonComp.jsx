import { Button } from '@material-ui/core';
import React from 'react';

const ButtonComp = ({ children, className }) => {
  return (
    <div>
      <Button className={className}>{children || 'btn'}</Button>
    </div>
  );
};

export default ButtonComp;
