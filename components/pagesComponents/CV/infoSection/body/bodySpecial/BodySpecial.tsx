'use client';
import Link from 'next/link';
import React from 'react';

interface Props {
  text: { part1: string; part2: string; linkLabel: string; linkUrl: string };
  // | { part1: string; part2: string; link: string }[];
}

const BodySpecial = ({ text }: Props) => {
  /**JSX**/
  return (
    <p data-component="BodySpecial" className="py-4">
      <span className="text-light p-regular">{text.part1}</span>{' '}
      <Link
        href={text.linkUrl}
        aria-label="Link do strony famatel.pl"
        scroll={false}
        className="inline p-regular text-light hover:text-corpo delay-100 duration-300 ease-linear"
      >
        {text.linkLabel}
      </Link>{' '}
      <br />
      <span className="text-light p-regular">{text.part2}</span>
    </p>
  );
};

export default BodySpecial;
