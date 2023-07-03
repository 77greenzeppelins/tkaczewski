import { pages3DPositions, pagesPath } from '@/data/basicData';
/*
const pages3DPositions = {
  pageHome: { x: 0 },
  page2D: { x: 10 },
  pageCV: { x: 20 },
  pageContacts: { x: 30 },
};
*/

const setXPosition = (path: string) => {
  switch (path) {
    case pagesPath.homePath:
      return pages3DPositions.pageHome.x;
    case pagesPath.cvPath:
      return pages3DPositions.pageCV.x;
    case pagesPath.contactcPath:
      return pages3DPositions.pageContacts.x;
    case pagesPath.test1Path:
      return pages3DPositions.pageTest1.x;
  }
};

export { setXPosition };
