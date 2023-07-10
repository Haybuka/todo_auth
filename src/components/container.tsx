import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="w-[380px] shadow-lg bg-gray-100 rounded-lg overflow-hidden">
      {children}
    </section>
  );
};

export default Container;
