import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectDetail from '../components/ProjectDetail';
import AllProjectsOverlay from '../components/AllProjectsOverlay';
import type { ProjectDetailData } from '../components/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 768px)').matches
      : true
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
};

const projects: ProjectDetailData[] = [
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
  },
  {
    title: 'Fleet Street Loft',
    image: '/project_loft.jpg',
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
  },
  {
    title: 'Islington Garden House',
    image: '/archive_04.jpg',
    location: 'Islington, London',
    year: '2022',
    scope: 'New-build dwelling',
    description:
      'A small new-build at the back of a long garden — built quietly, finished with care.',
    longDescription:
      'A 90 sqm garden house designed and built as a self-contained dwelling for an extended family. The structure sits low against a north-facing boundary, with a long roof light bringing daylight deep into the plan. Built with timber frame and lime-rendered walls so the house feels grown rather than placed.',
    gallery: [
      '/archive_05.jpg',
      '/archive_06.jpg',
      '/archive_01.jpg',
      '/archive_02.jpg',
      '/archive_03.jpg',
      '/archive_04.jpg',
    ],
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
  },
];

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const HOVER_DURATION = 700;
const HOVER_TRANSITION = `transform ${HOVER_DURATION}ms ${EASE}, opacity ${HOVER_DURATION}ms ${EASE}, box-shadow ${HOVER_DURATION}ms ${EASE}, filter ${HOVER_DURATION}ms ${EASE}`;

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const primaryCardRef = useRef<HTMLDivElement>(null);
  const secondaryCard1Ref = useRef<HTMLDivElement>(null);
  const secondaryCard2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const moreBtnRef = useRef<HTMLButtonElement>(null);

  const [hovered, setHovered] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [openAll, setOpenAll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [source, setSource] = useState<'selected' | 'all'>('selected');
  const isDesktop = useIsDesktop();

  const openFromSelected = (idx: number) => {
    setSource('selected');
    setOpenProject(idx);
  };

  const openFromAll = (idx: number) => {
    setSource('all');
    setOpenAll(false);
    setOpenProject(idx);
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          primaryCardRef.current,
          secondaryCard1Ref.current,
          secondaryCard2Ref.current,
          labelRef.current,
          moreBtnRef.current,
        ],
        { x: 0, y: 0, opacity: 1, clearProps: 'transform' }
      );
      gsap.set(section.querySelectorAll('.card-title'), {
        y: 0,
        opacity: 1,
        clearProps: 'transform',
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  // Mobile entrance — simple staggered fade-up, no pinning
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.mobile-project-card'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  const innerStyle = (idx: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: HOVER_TRANSITION,
      willChange: 'transform, opacity, filter',
    };
    if (hovered === null) return base;
    if (hovered === idx) {
      return {
        ...base,
        transform: 'scale(1.05)',
        boxShadow:
          '0 30px 80px rgba(0,0,0,0.18), 0 12px 30px rgba(0,0,0,0.10)',
        zIndex: 5,
      };
    }
    return {
      ...base,
      transform: 'scale(0.98)',
      opacity: 0.5,
      filter: 'blur(1.5px)',
    };
  };

  if (!isDesktop) {
    return (
      <section
        id="projects"
        ref={sectionRef}
        className="relative z-20 bg-doma-bg py-[10vh]"
      >
        <div className="px-[5vw] mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="label-upper mb-3">SELECTED PROJECTS</div>
            <h2 className="section-heading text-doma-text leading-[1.05]">
              Recent work
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpenAll(true)}
            className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-doma-text/30 text-doma-text text-[14px] hover:bg-doma-text hover:text-doma-bg transition-colors duration-300"
            aria-label="View all projects"
          >
            →
          </button>
        </div>

        <div className="px-[5vw] flex flex-col gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <button
              key={p.title}
              onClick={() => openFromSelected(i)}
              className="mobile-project-card relative w-full aspect-[4/5] sm:aspect-[3/2] rounded-md overflow-hidden shadow-card group text-left will-change-transform"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-active:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5">
                  {p.location} · {p.year}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl leading-tight">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/85">
                  View project <span>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="px-[5vw] mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setOpenAll(true)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-doma-text/30 bg-doma-bg text-doma-text text-xs uppercase tracking-[0.18em] font-semibold hover:bg-doma-text hover:text-doma-bg transition-colors duration-500"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[14px] leading-none transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
            <span>More Projects</span>
          </button>
        </div>

        {openProject !== null && (
          <ProjectDetail
            project={projects[openProject]}
            source={source}
            onClose={() => setOpenProject(null)}
          />
        )}

        {openAll && (
          <AllProjectsOverlay
            projects={projects}
            onClose={() => setOpenAll(false)}
            onSelect={openFromAll}
          />
        )}
      </section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className="relative z-20 bg-doma-bg">
      <div className="pinned-section">
        <button
          ref={labelRef}
          type="button"
          className="group absolute left-[3vw] top-[7vh] z-30 inline-flex items-center gap-3 will-change-transform"
        >
          <span className="font-bold uppercase tracking-[0.18em] text-doma-text text-[13px] md:text-[15px] border-b-2 border-doma-text/25 pb-1 group-hover:border-doma-text transition-colors duration-300">
            Selected Projects
          </span>
          <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-doma-text/30 text-doma-text text-[12px] transition-all duration-300 group-hover:border-doma-text group-hover:bg-doma-text group-hover:text-doma-bg group-hover:translate-x-1">
            →
          </span>
        </button>

        <Card
          outerRef={primaryCardRef}
          position="absolute left-[3vw] top-[16vh] w-[62vw] h-[64vh]"
          idx={0}
          project={projects[0]}
          onEnter={() => setHovered(0)}
          onLeave={() => setHovered((h) => (h === 0 ? null : h))}
          onClick={() => openFromSelected(0)}
          innerStyle={innerStyle(0)}
          showCta
          large
        />

        <Card
          outerRef={secondaryCard1Ref}
          position="absolute left-[67vw] top-[16vh] w-[30vw] h-[40vh]"
          idx={1}
          project={projects[1]}
          onEnter={() => setHovered(1)}
          onLeave={() => setHovered((h) => (h === 1 ? null : h))}
          onClick={() => openFromSelected(1)}
          innerStyle={innerStyle(1)}
        />

        <Card
          outerRef={secondaryCard2Ref}
          position="absolute left-[67vw] top-[58vh] w-[30vw] h-[22vh]"
          idx={2}
          project={projects[2]}
          onEnter={() => setHovered(2)}
          onLeave={() => setHovered((h) => (h === 2 ? null : h))}
          onClick={() => openFromSelected(2)}
          innerStyle={innerStyle(2)}
        />

        {!expanded && (
          <button
            ref={moreBtnRef}
            type="button"
            onClick={() => setExpanded(true)}
            className="group absolute right-[3vw] bottom-[5vh] z-30 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-doma-text/30 bg-doma-bg/80 backdrop-blur-sm text-doma-text text-xs md:text-sm uppercase tracking-[0.18em] font-semibold hover:bg-doma-text hover:text-doma-bg hover:border-doma-text transition-colors duration-500 will-change-transform"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[14px] leading-none transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
            <span>More Projects</span>
          </button>
        )}
      </div>

      {expanded && (
        <div className="relative w-screen h-[80vh] -mt-[20vh] overflow-hidden">
          <Card
            position="absolute left-[3vw] top-0 w-[30vw] h-[40vh]"
            idx={3}
            project={projects[3]}
            onEnter={() => setHovered(3)}
            onLeave={() => setHovered((h) => (h === 3 ? null : h))}
            onClick={() => openFromSelected(3)}
            innerStyle={innerStyle(3)}
          />

          <Card
            position="absolute left-[3vw] top-[42vh] w-[30vw] h-[22vh]"
            idx={4}
            project={projects[4]}
            onEnter={() => setHovered(4)}
            onLeave={() => setHovered((h) => (h === 4 ? null : h))}
            onClick={() => openFromSelected(4)}
            innerStyle={innerStyle(4)}
          />

          <Card
            position="absolute left-[35vw] top-0 w-[62vw] h-[64vh]"
            idx={5}
            project={projects[5]}
            onEnter={() => setHovered(5)}
            onLeave={() => setHovered((h) => (h === 5 ? null : h))}
            onClick={() => openFromSelected(5)}
            innerStyle={innerStyle(5)}
            showCta
            large
          />

          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="group absolute left-[3vw] bottom-[5vh] z-30 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-doma-text/30 bg-doma-bg/80 backdrop-blur-sm text-doma-text text-xs md:text-sm uppercase tracking-[0.18em] font-semibold hover:bg-doma-text hover:text-doma-bg hover:border-doma-text transition-colors duration-500"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[14px] leading-none transition-transform duration-300 group-hover:-rotate-90">
              −
            </span>
            <span>Less Projects</span>
          </button>

          <button
            type="button"
            className="group absolute right-[3vw] bottom-[5vh] z-30 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-doma-text/30 bg-doma-bg/80 backdrop-blur-sm text-doma-text text-xs md:text-sm uppercase tracking-[0.18em] font-semibold hover:bg-doma-text hover:text-doma-bg hover:border-doma-text transition-colors duration-500"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[14px] leading-none transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
            <span>Show All Projects</span>
          </button>
        </div>
      )}

      {openProject !== null && (
        <ProjectDetail
          project={projects[openProject]}
          source={source}
          onClose={() => setOpenProject(null)}
        />
      )}

      {openAll && (
        <AllProjectsOverlay
          projects={projects}
          onClose={() => setOpenAll(false)}
          onSelect={(idx) => {
            setOpenAll(false);
            setOpenProject(idx);
          }}
        />
      )}
    </section>
  );
}

type CardProps = {
  outerRef?: React.RefObject<HTMLDivElement | null>;
  position: string;
  idx: number;
  project: ProjectDetailData;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
  innerStyle: React.CSSProperties;
  showCta?: boolean;
  large?: boolean;
};

function Card({
  outerRef,
  position,
  project,
  onEnter,
  onLeave,
  onClick,
  innerStyle,
  showCta,
  large,
}: CardProps) {
  return (
    <div ref={outerRef} className={`${position} will-change-transform`}>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
        className="relative w-full h-full rounded-md overflow-hidden cursor-pointer shadow-card group"
        style={innerStyle}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform [transition-duration:800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div
          className={`absolute ${large ? 'left-[2.2vw] bottom-[2.6vh]' : 'left-[1.6vw] bottom-[2.2vh]'} text-white`}
        >
          <h3
            className={`card-title font-serif transition-transform [transition-duration:700ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 ${large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
          >
            {project.title}
          </h3>
        </div>
        {showCta && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="absolute right-[2.2vw] bottom-[2.6vh] px-5 py-2 border border-white/40 text-white text-xs uppercase tracking-wider rounded-full opacity-90 transition-[opacity,background-color,color,border-color,transform] [transition-duration:700ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:-translate-y-1 hover:bg-white hover:text-doma-text"
          >
            View Project
          </button>
        )}
      </div>
    </div>
  );
}
