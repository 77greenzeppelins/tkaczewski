import React from 'react';

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div className="w-full relative h-[28px]">
      <p className="p-regular uppercase text-corpo font-serif">{text}</p>
      <span className="absolute inset-x-0 bottom-0  border-b border-corpo w-full h-[1px]" />
    </div>
  );
};

export default SectionHeader;
