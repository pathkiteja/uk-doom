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

export const projects: ProjectDetailData[] = [
  {
    title: 'Victoria Mews Residence',
    image: '/project_primary_residence.jpg',
    location: 'Hackney, London',
    year: '2024',
    scope: 'Full refurbishment + extension',
    description:
      'A heritage townhouse reimagined with restrained materiality and considered light.',
    longDescription:
      'A complete reworking of a Victorian townhouse, opening up the rear elevation with a quiet glass-and-stone extension and re-detailing the original interiors. Every joint, fixture, and finish was specified to age gracefully — oak floors, lime plaster, brushed brass — so the house reads as one continuous story rather than a renovation pasted onto a heritage shell.',
    gallery: [
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
    ],
    category: 'residential',
    status: 'present',
  },
  {
    title: 'Notting Hill Conversion',
    image: '/archive_05.jpg',
    location: 'Notting Hill, London',
    year: '2024',
    scope: 'Whole-house remodel',
    description:
      'A full-house remodel in stucco-fronted Notting Hill — every room reordered around light.',
    longDescription:
      'A whole-house remodel that reordered the plan around the light. We removed a heavy spine wall, opened the stair, and reworked the lower ground to give the house a single continuous flow from front door to garden. New oak joinery, a hand-troweled plaster finish, and a deeply considered lighting scheme hold the rooms together.',
    gallery: [
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
    ],
    category: 'residential',
    status: 'present',
  },
  {
    title: 'Hampstead Coach House',
    image: '/project_loft.jpg',
    location: 'Hampstead, London',
    year: '2024',
    scope: 'Conversion + extension',
    description:
      'A coach house quietly converted into a single-storey home for a writer and a sculptor.',
    longDescription:
      'A small mews coach house was reworked into a single residence with a top-lit living volume, a study set behind a sliding plaster screen, and a walled garden room finished in lime render. The brief asked for two distinct working quarters that could share a kitchen — the plan obliges without ever losing the original geometry of the building.',
    gallery: [
      '/archive_02.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_01.jpg',
      '/archive_03.jpg',
      '/archive_06.jpg',
    ],
    category: 'residential',
    status: 'present',
  },
  {
    title: 'Belsize Park House',
    image: '/archive_02.jpg',
    location: 'Belsize Park, London',
    year: '2025',
    scope: 'Whole-house refurbishment',
    description:
      'A whole-house refurbishment leaning on lime, oak and a calm material palette.',
    longDescription:
      'A family house reworked end-to-end — new services, new joinery, a deeper rear extension, and a quieter material palette throughout. Lime plaster, brushed oak floors and a single travertine kitchen island let the architecture lead.',
    gallery: [
      '/archive_02.jpg',
      '/archive_05.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
    ],
    category: 'residential',
    status: 'present',
  },
  {
    title: 'Islington Garden Flat',
    image: '/archive_05.jpg',
    location: 'Islington, London',
    year: '2025',
    scope: 'Lower ground remodel',
    description:
      'A lower-ground flat reordered around a new garden room and a quiet kitchen line.',
    longDescription:
      'A lower-ground flat reworked to lift daylight into the centre of the plan. We rebuilt the rear wall as a glazed garden room, lined the kitchen in pale oak, and re-detailed every threshold so the level changes read as choreography rather than obstacles.',
    gallery: [
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_04.jpg',
    ],
    category: 'residential',
    status: 'present',
  },

  {
    title: 'Fleet Street Loft',
    image: '/archive_03.jpg',
    location: 'Holborn, London',
    year: '2023',
    scope: 'Loft conversion + interior fit-out',
    description:
      'An open-plan loft built around oak, brass, and considered detail — a private retreat carved out of the city.',
    longDescription:
      'A working warehouse converted into a single-storey residence, retaining the original steel and exposing the brick where it served the room. We rebuilt the structure to host a full-height living volume, then layered in oak joinery, blackened steel railings, and a quiet kitchen that lets the architecture lead.',
    gallery: [
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
    ],
    category: 'residential',
    status: 'past',
  },
  {
    title: 'Marylebone Townhouse',
    image: '/archive_01.jpg',
    location: 'Marylebone, London',
    year: '2023',
    scope: 'Heritage refurbishment',
    description:
      'A grade-listed townhouse restored with quiet hands — original mouldings preserved, services rebuilt invisibly.',
    longDescription:
      'A grade II-listed townhouse where the brief was to restore without erasing. We worked closely with conservation officers to retain original mouldings, sash windows, and floorboards, while rebuilding the services and rear extension to modern thermal standards. The result is a house that feels untouched but performs to today.',
    gallery: [
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
    ],
    category: 'residential',
    status: 'past',
  },
  {
    title: 'Camden Mews Extension',
    image: '/archive_03.jpg',
    location: 'Camden, London',
    year: '2023',
    scope: 'Rear extension + interior',
    description:
      'A rear extension finished in handmade brick — the kind of detail that only reads at close range.',
    longDescription:
      'A modest rear extension that does a lot with a little. Handmade Belgian brick, a single-pour concrete floor, and a slim aluminium roof line that lifts away from the existing house. Inside, a kitchen built around a single oak island opens onto the garden through a wide sliding screen.',
    gallery: [
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
    ],
    category: 'residential',
    status: 'past',
  },
  {
    title: 'Highbury Terrace',
    image: '/archive_04.jpg',
    location: 'Highbury, London',
    year: '2022',
    scope: 'Heritage restoration',
    description:
      'A run of three terraced houses brought back from the studs with a single sympathetic detail set.',
    longDescription:
      'A coordinated heritage restoration across three adjoining terraced houses. We worked closely with conservation officers to retain shopfronts, sash windows and original moulding profiles, while quietly upgrading services and thermal performance behind the scenes.',
    gallery: [
      '/archive_04.jpg',
      '/archive_02.jpg',
      '/archive_06.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_01.jpg',
    ],
    category: 'residential',
    status: 'past',
  },

  {
    title: 'Shoreditch Studio',
    image: '/archive_02.jpg',
    location: 'Shoreditch, London',
    year: '2024',
    scope: 'Commercial fit-out',
    description:
      'A creative studio fit-out — exposed services, raw concrete floors, and a precise palette for working hours.',
    longDescription:
      'A 600 sqm creative studio on the upper floors of a listed warehouse. We stripped the space back to its concrete shell, exposed the services along clear lines, and inserted a calm meeting volume in blackened steel. The fit-out was delivered in twelve weeks around an active building, with all noisy works phased to evenings.',
    gallery: [
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
    ],
    category: 'commercial',
    status: 'present',
  },
  {
    title: 'Hoxton Atelier',
    image: '/archive_04.jpg',
    location: 'Hoxton, London',
    year: '2024',
    scope: 'Workshop + gallery',
    description:
      'A double-height workshop and ground-floor gallery for an independent design studio.',
    longDescription:
      'A neglected ground-floor unit reworked into a working atelier. We opened a slot through the slab to bring daylight into the workshop below, and lined the upper gallery in pale plaster so finished pieces could be seen against a quiet background. The shopfront keeps its original cast-iron mullions, deliberately uncleaned.',
    gallery: [
      '/archive_04.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_01.jpg',
    ],
    category: 'commercial',
    status: 'present',
  },
  {
    title: 'Mayfair Press Room',
    image: '/archive_05.jpg',
    location: 'Mayfair, London',
    year: '2024',
    scope: 'Office refurbishment',
    description:
      'A press room and lounge for an editorial group — quiet, dense, and built to host long days.',
    longDescription:
      'A 220 sqm office floor reworked around the way the team actually works — a long writing room, a smaller editing wing, and a press lounge for guests. Materially the project leans on dark stained oak, deep wool carpet, and warm parchment wall finishes. Acoustic detailing was treated as a primary scope, not a finishing touch.',
    gallery: [
      '/archive_05.jpg',
      '/archive_01.jpg',
      '/archive_03.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_04.jpg',
    ],
    category: 'commercial',
    status: 'present',
  },
  {
    title: 'Clerkenwell Studio Block',
    image: '/archive_03.jpg',
    location: 'Clerkenwell, London',
    year: '2025',
    scope: 'Multi-tenant fit-out',
    description:
      'A multi-tenant studio block let to four small practices — quiet shared circulation, separate fronts of house.',
    longDescription:
      'A four-tenant fit-out across two upper floors of a Victorian warehouse. Each studio has its own front door, a shared lobby in honed limestone, and a calm services strategy that hides every cable and pipe behind an oak service spine.',
    gallery: [
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_04.jpg',
    ],
    category: 'commercial',
    status: 'present',
  },
  {
    title: 'Borough Market Cafe',
    image: '/archive_06.jpg',
    location: 'Borough, London',
    year: '2025',
    scope: 'Hospitality fit-out',
    description:
      'A small daytime cafe carved out of a market stall — every surface chosen to age in public.',
    longDescription:
      'A 35 sqm cafe at the edge of a working market. We rebuilt the shopfront in raw steel and glass, lined the working counter in stainless and the room in plaster, and detailed every joint to age in plain sight. Built and handed over in nine weeks.',
    gallery: [
      '/archive_06.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_02.jpg',
      '/archive_05.jpg',
      '/archive_01.jpg',
    ],
    category: 'commercial',
    status: 'present',
  },

  {
    title: 'Smithfield Workhouse',
    image: '/archive_06.jpg',
    location: 'Smithfield, London',
    year: '2022',
    scope: 'Office conversion',
    description:
      'A former meat market warehouse reworked into a single-tenant office, cast-iron column lines kept legible.',
    longDescription:
      'A 1,800 sqm warehouse on the edge of Smithfield, reordered as a single office for an architecture studio. We lifted the slab to expose the original cast-iron column grid and re-fitted the space with a long oak workbench and a series of smaller meeting volumes lined in cork. The brief asked for one continuous room that read as a workshop, not a corporate floor.',
    gallery: [
      '/archive_06.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_04.jpg',
    ],
    category: 'commercial',
    status: 'past',
  },
  {
    title: 'Knightsbridge Boutique',
    image: '/archive_01.jpg',
    location: 'Knightsbridge, London',
    year: '2022',
    scope: 'Retail fit-out',
    description:
      'A flagship retail fit-out finished in travertine and bronzed steel — quiet on the street, generous inside.',
    longDescription:
      'A small flagship boutique in a listed terrace, finished as a single travertine room with bronzed steel display elements. We rebuilt the shopfront to original profiles and inserted a discreet stockroom and fitting suite to the rear. All site works were carried out at night to keep the street trade undisrupted.',
    gallery: [
      '/archive_01.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_06.jpg',
    ],
    category: 'commercial',
    status: 'past',
  },
  {
    title: 'Bermondsey Press House',
    image: '/archive_05.jpg',
    location: 'Bermondsey, London',
    year: '2022',
    scope: 'Office conversion',
    description:
      'A former print works converted into a single editorial floor with a lean services strategy.',
    longDescription:
      'A former print works carried into its second life as a single editorial floor. We exposed the original concrete soffits, lined a quiet meeting wing in cork, and detailed every services run as a deliberate ceiling element.',
    gallery: [
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_04.jpg',
    ],
    category: 'commercial',
    status: 'past',
  },
  {
    title: 'Soho Showroom',
    image: '/archive_02.jpg',
    location: 'Soho, London',
    year: '2021',
    scope: 'Retail showroom',
    description:
      'A small showroom for an independent furniture maker — one room, three materials, no compromise.',
    longDescription:
      'A 90 sqm showroom built around a single oak display table and a calm white plaster envelope. We replaced the shopfront with a slim steel-and-glass set, finished the floor in a single pour of pigmented concrete, and let the work being shown do the rest.',
    gallery: [
      '/archive_02.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
    ],
    category: 'commercial',
    status: 'past',
  },

  {
    title: 'Brixton Community Hall',
    image: '/project_community.jpg',
    location: 'Brixton, London',
    year: '2024',
    scope: 'New build · community use',
    description:
      'A neighbourhood gathering space rebuilt around community, craft, and a generous sense of welcome.',
    longDescription:
      'A community-led brief delivered as a calm, durable building. The hall holds a flexible main room, a small commercial kitchen, and a quieter side wing for meetings — all wrapped in a long timber-clad facade designed to weather softly with the street. We worked alongside local trades on every phase to keep the project rooted in its neighbourhood.',
    gallery: [
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_01.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_02.jpg',
    ],
    category: 'community',
    status: 'present',
  },
  {
    title: 'Stratford Library Wing',
    image: '/archive_04.jpg',
    location: 'Stratford, London',
    year: '2024',
    scope: 'Public extension',
    description:
      'A new wing for an existing public library — a long top-lit reading room and a children\'s annex.',
    longDescription:
      'A modest extension that doubles the library\'s programmable area without overshadowing the original 1930s building. The new wing sits low against the boundary, finished in a soft buff brick with deep window reveals. A long roof light brings even daylight onto the reading tables; a separate children\'s room opens onto a small enclosed garden.',
    gallery: [
      '/archive_04.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
    ],
    category: 'community',
    status: 'present',
  },
  {
    title: 'Whitechapel Garden Hall',
    image: '/archive_06.jpg',
    location: 'Whitechapel, London',
    year: '2024',
    scope: 'New build · community garden',
    description:
      'A small timber pavilion at the centre of a community garden — a sheltered room for workshops and meals.',
    longDescription:
      'A 90 sqm timber-framed hall built around a single open room with a long communal table. The structure was prefabricated off-site with a local timber contractor and assembled in a fortnight to limit disruption to the surrounding garden. A wood-burning stove, a small servery, and clerestory glazing on three sides keep the space warm and well-lit through the year.',
    gallery: [
      '/archive_06.jpg',
      '/archive_05.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
    ],
    category: 'community',
    status: 'present',
  },
  {
    title: 'Hackney Youth Centre',
    image: '/archive_01.jpg',
    location: 'Hackney, London',
    year: '2025',
    scope: 'Refurbishment + extension',
    description:
      'A working youth centre re-fitted around a long top-lit hall and a re-tiled outdoor court.',
    longDescription:
      'A 1970s youth centre brought back into daily use with a careful refurbishment, a small new wing for music and recording, and a re-tiled outdoor sport court. Phased through term-time so the existing programme never closed.',
    gallery: [
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
      '/archive_05.jpg',
      '/archive_02.jpg',
    ],
    category: 'community',
    status: 'present',
  },
  {
    title: 'Deptford Library Garden',
    image: '/archive_05.jpg',
    location: 'Deptford, London',
    year: '2025',
    scope: 'Public garden room',
    description:
      'A small reading garden built against the long flank of a public library.',
    longDescription:
      'A long timber-framed garden room set against the south side of an existing public library. A run of clerestory glazing brings even daylight onto a generous reading bench, and a small lobby links it back into the children\'s wing.',
    gallery: [
      '/archive_05.jpg',
      '/archive_02.jpg',
      '/archive_01.jpg',
      '/archive_06.jpg',
      '/archive_04.jpg',
      '/archive_03.jpg',
    ],
    category: 'community',
    status: 'present',
  },

  {
    title: 'Highgate Pavilion',
    image: '/archive_06.jpg',
    location: 'Highgate, London',
    year: '2023',
    scope: 'Garden pavilion · new build',
    description:
      'A small timber-and-glass pavilion at the end of a long garden — a quiet room for working and reading.',
    longDescription:
      'A standalone pavilion designed as a private workroom — a single 24 sqm volume in cedar and glass, with a wood-burning stove and a writing desk facing the garden. Built off-site in panels and assembled in five days to limit disruption to the main house and surrounding planting.',
    gallery: [
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
    ],
    category: 'community',
    status: 'past',
  },
  {
    title: 'Peckham Skate Pavilion',
    image: '/archive_02.jpg',
    location: 'Peckham, London',
    year: '2022',
    scope: 'Public structure',
    description:
      'An open shelter and amenities block for a youth-run skate park — durable, generous, and unfussy.',
    longDescription:
      'A simple steel-framed shelter with a cast-in-place concrete base, designed as a meeting point for the skate park behind it. The brief was set out by the youth-run trust that operates the park — they asked for a roof, a long bench, water, and lights. We delivered exactly that, and very little else, on a fixed community-funded budget.',
    gallery: [
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
    ],
    category: 'community',
    status: 'past',
  },
  {
    title: 'Lewisham Walled Garden',
    image: '/archive_04.jpg',
    location: 'Lewisham, London',
    year: '2021',
    scope: 'Public garden + shelter',
    description:
      'A walled community garden with a small shelter and a long communal table.',
    longDescription:
      'A neglected back-of-house yard reworked into a walled community garden. A modest steel-framed shelter sits at one end with a long communal table beneath it, and a small services point keeps the space usable through the year.',
    gallery: [
      '/archive_04.jpg',
      '/archive_06.jpg',
      '/archive_02.jpg',
      '/archive_05.jpg',
      '/archive_03.jpg',
      '/archive_01.jpg',
    ],
    category: 'community',
    status: 'past',
  },
];
