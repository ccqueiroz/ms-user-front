import React from 'react';
type Props = {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  id?: string;
};
export const Heading = ({ element, id, children }: Props) => {
  return React.createElement(
    (element = element ?? 'h2'),
    {
      id,
      className: 'heading',
    },
    children,
  );
};
