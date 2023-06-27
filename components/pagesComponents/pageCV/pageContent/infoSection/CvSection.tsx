import React from 'react';
/**Components**/
import SectionHeader from './header/SectionHeader';
import SectionBody from './body/SectionBody';
import BodySpecial from './body/bodySpecial/BodySpecial';

/**TS**/
interface Props {
  headerText: string;
  bodyText:
    | string[]
    | { col1: string; col2: string[] }[]
    | { part1: string; part2: string; linkLabel: string; linkUrl: string };
}

/**----------------------------**/
const CvSection = ({ headerText, bodyText }: Props) => {
  //___ type guard
  // const isStringArray = (propsToCheck: any): propsToCheck is string[] => {
  //   return Array.isArray(propsToCheck) && typeof propsToCheck[0] === 'string';
  // };
  const isStringArray = (
    propsToCheck: any
  ): propsToCheck is {
    part1: string;
    part2: string;
    linkLabel: string;
    linkUrl: string;
  } => {
    return (
      typeof propsToCheck === 'object' &&
      'part1' in propsToCheck &&
      'part2' in propsToCheck &&
      'linkLabel' in propsToCheck &&
      'linkUrl' in propsToCheck
    );
  };

  return (
    <div className="w-full py-6 wrapper-1">
      <SectionHeader text={headerText} />
      {isStringArray(bodyText) ? (
        <BodySpecial text={bodyText} />
      ) : (
        <SectionBody text={bodyText} />
      )}
    </div>
  );
};

export default CvSection;
