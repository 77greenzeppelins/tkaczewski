/*IntroOverlay*/
const introOverlayTexts = ['just', 'choose', 'your', 'favorite', 'experience'];
const introOverlayTextsStyles = [
  ' text-light select-none',
  ' text-light select-none',
  ' text-light select-none',
  ' text-corpo select-none',
  ' text-corpo select-none',
];
const timeZones = [
  { city: 'Washington DC', zone: 'America/New_York' },
  { city: 'Dzierżoniów', zone: 'Europe/Warsaw' },
  { city: 'Beijing', zone: 'Asia/Shanghai' },
];

// const page2DTexts = {
//   section1: {
//     part1: [
//       "Hi, I'm Oskar",
//       'front-end developer',
//       'probably the best alternative for all AI tools you know',
//     ],
//   },
// };

const cvSections = [
  {
    header: 'personal statement',
    body: [
      'A passionate and enthusiastic self-made front-end developer with over 3 years of commercial experience developing web applications. Well-versed in various aspects of front-end development and deployment, including creating full web solutions that incorporate the latest UI and UX trends. Competent in analyzing business requirements and selecting the appropriate technical tools to implement them.',
    ],
  },
  {
    header: 'education',
    body: [
      {
        col1: '1999 - 2005',
        col2: [
          'Philosophy',
          'Wroclaw University',
          'Wroclaw, Poland',
          // 'Final Grade: Very Good (A)',
        ],
      },
      {
        col1: '1996 - 1998',
        col2: [
          'Advertising Studies',
          'School of Economics',
          'Dzierzoniow, Poland',
          // 'Final Grade: Very Good (A)',
        ],
      },
      {
        col1: '1991 - 1995',
        col2: [
          'The Second General High School',
          'Dzierzoniow, Poland',
          // 'Final Grade: Good (B)',
        ],
      },
    ],
  },
  {
    header: 'languages',
    body: [
      {
        col1: 'Polish',
        col2: ['Mother tongue'],
      },
      {
        col1: 'English',
        col2: ['Intermediate'],
      },
    ],
  },
  // {
  //   header: 'achievements and awards',
  //   body: [
  //     {
  //       col1: '2000 - 2005',
  //       col2: [
  //         'Scholarship for students with an outstanding result at Wroclaw University.',
  //       ],
  //     },
  //     {
  //       col1: '0000 - 0000',
  //       col2: ['Set up and run successfully own Business'],
  //     },
  //   ],
  // },
  {
    header: 'computer skills',
    body: [
      {
        col1: 'Programing Languages',
        col2: ['JavaScript / TypeScript', 'GLSL'],
      },
      {
        col1: 'Web Development',
        col2: [
          'HTML',
          'CSS / Tailwind CSS',
          'React',
          'Framer Motion',
          'react-three-fiber “eco system” (react-three/fiber,  react-three/drei,  react-spring, use-gesture)',
          'three.js',
        ],
      },
    ],
  },
  {
    header: 'work experience',
    body: [
      {
        col1: '2020 - current',
        col2: [
          'Freelancing - graphic and web development services',
          'Roles and Responsibilities:',
          'Searching new business partners.  Maintaining business operational and technical aspects of provided solutions',
          'Creating design that matches customer’s requirements',
          'Developing interfaces with respect to responsive design, cross-browser compatibility and accessibility',
          'Performance optimization',
          'Post-deployment services; Implementing new features or improvements suggested by customers and their clients;',
        ],
      },
      {
        col1: '2006 - 2019',
        col2: [
          'Sales representative / Regional Director ',
          'Roles and Responsibilities:',
          'Create sales network for the market of luxury goods on three voivodeships (Opolskie Voivodeship, Silesia, Lesser Poland);',
          'Gaining new customers;',
          'Maintaining business relationships;',
        ],
      },
      {
        col1: '2001 - 2002',
        col2: [
          'Trainee Teacher at Secondary School No.10 Wroclaw, Poland',
          'Roles and Responsibilities:',
          'Teaching history of philosophy',
        ],
      },
    ],
  },
  {
    header: 'worth visiting',
    body: {
      part1:
        'If you want to measure my current web development skill visit last project of mine: ',
      part2:
        '(project based on: react 18.2, next 13.0, typescript, tailwind, framer-motion)',
      linkLabel: ' famatel.pl ',
      linkUrl: 'https://famatel.pl ',
    },
  },
  {
    header: 'interest and activities',
    body: [
      'History of ideas; Art & Design; Programming; Swimming; Cross training workout; Finding out how my 8-years-old daughter perceive the world (probably the most interesting and challenging)',
    ],
  },
];

const pageContactsText = {
  gitHub: ['If you want to check my', 'Just let me know...'],
};

export {
  introOverlayTexts,
  introOverlayTextsStyles,
  timeZones,
  cvSections,
  pageContactsText,
};
