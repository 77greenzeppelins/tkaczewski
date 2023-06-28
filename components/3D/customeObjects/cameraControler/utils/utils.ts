import { pages3DPositions, pagesPath } from '@/data/basicData';

const setXPosition = (path: string) => {
  switch (path) {
    case pagesPath.homePath:
      return pages3DPositions.page2D.x;
    case pagesPath.cvPath:
      return pages3DPositions.pageCV.x;
    case pagesPath.contactcPath:
      return pages3DPositions.pageContacts.x;
  }
};

export { setXPosition };
