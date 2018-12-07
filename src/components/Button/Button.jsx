import * as React from 'react';

export const Button = (props) => {
  const { bg, children } = props;
  return (
    <button style={{ backgroundColor: bg }}>
      {children}
    </button>
  );
}

export default Button;
