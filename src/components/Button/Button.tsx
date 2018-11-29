import * as React from 'react';

export interface Props {
  bg: string;
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  const { bg, children } = props;
  return (
    <button style={{ backgroundColor: bg }}>
      {children}
    </button>
  );
}

export default Button;
