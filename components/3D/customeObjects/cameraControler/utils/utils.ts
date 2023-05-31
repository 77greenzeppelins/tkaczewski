import { pages3DPositions, pagesLinks } from '@/data/basicData';

const setXPosition = (path: string) => {
  switch (path) {
    case pagesLinks[0].href:
      return pages3DPositions.pageHome.x;
    case pagesLinks[1].href:
      return pages3DPositions.page2D.x;
    case pagesLinks[2].href:
      return pages3DPositions.pageCV.x;
    case pagesLinks[3].href:
      return pages3DPositions.pageContacts.x;
  }
};

export { setXPosition };
