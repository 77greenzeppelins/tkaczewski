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

const page2DTexts = {
  section1: {
    part1: [
      "Hi, I'm Oskar",
      'front-end developer',
      'probably the best alternative for all AI tools you know',
    ],
  },
};

const cvSections = [
  {
    header: 'personal statement',
    body: [
      'A passionate and enthusiastic self-taught front-end developer with over 3 years of commercial experience in developing web application, able to perform various aspects of web page development and deployment. That includes creating QQQ within Business Intelligence toolkit. Competent in analyzing and manipulating….',
    ],
  },
  {
    header: 'aducation',
    body: [
      {
        col1: '2000 - 2005',
        col2: [
          'Philosophy',
          'Wroclaw University',
          'Wroclaw, Poland',
          'Final Grade: Very Good (A)',
        ],
      },
      {
        col1: '1996 - 1998',
        col2: [
          'Advertising Studies',
          'School of Economics',
          'Dzierżoniów, Poland',
          'Final Grade: Very Good (A)',
        ],
      },
      {
        col1: '1991 - 1995',
        col2: [
          'Biologiczno-chemiczny',
          'The Second General High School',
          'Dzierżoniów, Poland',
          'Final Grade: Very Good (A)',
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
  {
    header: 'achievements and awards',
    body: [
      {
        col1: '2000 - 2005',
        col2: [
          'Scholarship for students with an outstanding result at Wroclaw University.',
        ],
      },
      {
        col1: '0000 - 0000',
        col2: ['Set up and run successfully own Business'],
      },
    ],
  },
  {
    header: 'computer skills',
    body: [
      {
        col1: 'Programing Languages',
        col2: ['Java script / type script', 'glsl'],
      },
      {
        col1: 'Web Development',
        col2: [
          'HTML',
          'CSS',
          'react',
          'three-fiber “eco system” (react-three/fiber,  react-three/drei,  react-spring, use-gesture)',
          'three.js',
          'tailwind',
          'framer-motion',
        ],
      },
    ],
  },
  {
    header: 'work experience',
    body: [
      {
        col1: '2020 - current',
        col2: ['Freelancing; graphic and web development services'],
      },
      {
        col1: '2006 - 2019',
        col2: [
          'Sales representative / Regional Director ',
          'Roles and Responsibilities: Create sale on three voivodeships (Opolskie Voivodeship, Silesia, Lesser Poland), win new clients',
        ],
      },
      {
        col1: '2001 - 2002',
        col2: [
          'Trainee Teacher at Secondary School No.10 Wroclaw, Poland',
          'Roles and Responsibilities:Responsible for teaching history of philosophy',
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
        ' Project based on: react 18.2, next 13.0, typescript, tailwind, framer-motion ',
      linkLabel: ' famatel.pl ',
      linkUrl: 'https://famatel.pl ',
    },
  },
  {
    header: 'interest and activities',
    body: [
      'Art & design history; Digital Art; Programming; Swimming; Cross training workout; Finding out how my 8 years old daughter perceive the world (probably the most interesting and challenging)',
    ],
  },
];

// passion: {
//   header: 'interest and activities',
//   text: '',
// },

export {
  introOverlayTexts,
  introOverlayTextsStyles,
  timeZones,
  page2DTexts,
  cvSections,
};
