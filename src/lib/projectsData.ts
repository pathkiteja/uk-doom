import type {
  ProjectDetailData,
  ProjectCategory,
} from '../components/ProjectDetail';

export type CategoryEntry = {
  id: ProjectCategory;
  title: string;
  image: string;
  blurb: string;
};

// Image folder convention (client images to be dropped in here):
//   /public/projects/<category>/<slug>/01.jpg, 02.jpg, ...
// Until the client images arrive, each project points to the existing
// /archive_*.jpg placeholders so the layout still renders.

export const CATEGORY_ENTRIES: CategoryEntry[] = [
  {
    id: 'commercial',
    title: 'Commercial',
    image: '/archive_02.jpg',
    blurb: 'Workspaces, retail, hospitality.',
  },
  {
    id: 'residential',
    title: 'Residential',
    image: '/project_primary_residence.jpg',
    blurb: 'Houses, apartments, homes.',
  },
  {
    id: 'community',
    title: 'Community',
    image: '/project_community.jpg',
    blurb: 'Civic, public, neighbourhood.',
  },
];

const PLACEHOLDER_DESCRIPTION = 'Full project details coming soon.';
const PLACEHOLDER_LONG_DESCRIPTION =
  'Full project description and photography to follow.';

export const projects: ProjectDetailData[] = [
  // ─── RESIDENTIAL ──────────────────────────────────────────────────────
  {
    title: '57 Castle Street, Reading',
    image: '/archive_01.jpg',
    location: 'Reading, Berkshire',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Balham',
    image: '/archive_02.jpg',
    location: 'Balham, London',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Finchley House',
    image: '/archive_03.jpg',
    location: 'Finchley, London',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Finsbury Park',
    image: '/archive_04.jpg',
    location: 'Finsbury Park, London',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Hitchen',
    image: '/archive_05.jpg',
    location: 'Hitchin, Hertfordshire',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Richmond House',
    image: '/archive_06.jpg',
    location: 'Richmond, London',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
    ],
    category: 'residential',
  },
  {
    title: 'Wembley',
    image: '/archive_01.jpg',
    location: 'Wembley, London',
    year: '',
    scope: 'Residential',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_01.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_04.jpg',
      '/archive_06.jpg',
    ],
    category: 'residential',
  },

  // ─── COMMUNITY ────────────────────────────────────────────────────────
  {
    title: 'IDC',
    image: '/archive_06.jpg',
    location: 'United Kingdom',
    year: '',
    scope: 'Community',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_02.jpg',
    ],
    category: 'community',
  },
  {
    title: 'Leyton',
    image: '/archive_04.jpg',
    location: 'Leyton, London',
    year: '',
    scope: 'Community',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_04.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
    ],
    category: 'community',
  },
  {
    title: 'Luton',
    image: '/archive_02.jpg',
    location: 'Luton, Bedfordshire',
    year: '',
    scope: 'Community',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_02.jpg',
      '/archive_05.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
    ],
    category: 'community',
  },
  {
    title: 'Luton Central',
    image: '/archive_05.jpg',
    location: 'Luton, Bedfordshire',
    year: '',
    scope: 'Community',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
    ],
    category: 'community',
  },
  {
    title: 'Southall Washrooms',
    image: '/archive_03.jpg',
    location: 'Southall, London',
    year: '',
    scope: 'Community',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_04.jpg',
    ],
    category: 'community',
  },

  // ─── COMMERCIAL ───────────────────────────────────────────────────────
  {
    title: 'Qaboli',
    image: '/archive_02.jpg',
    location: 'United Kingdom',
    year: '',
    scope: 'Commercial',
    description: PLACEHOLDER_DESCRIPTION,
    longDescription: PLACEHOLDER_LONG_DESCRIPTION,
    gallery: [
      '/archive_02.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
    ],
    category: 'commercial',
  },
];
