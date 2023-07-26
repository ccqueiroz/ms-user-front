import React from 'react';
type Props = {
  children: React.ReactNode;
  id?: string;
};
export const Text = ({ id, children }: Props) => {
  return React.createElement(
    'span',
    {
      id,
      className: 'spanText',
    },
    children,
  );
};
