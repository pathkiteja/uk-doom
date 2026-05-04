import { useEffect, useRef, useState } from 'react';

export type ProjectDetailData = {
  title: string;
  image: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  longDescription: string;
  gallery: string[];
};

type Props = {
  project: ProjectDetailData;
  source?: 'selected' | 'all';
  onClose: () => void;
};

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const SOURCE_LABEL: Record<NonNullable<Props['source']>, string> = {
  selected: 'Selected Projects',
  all: 'All Projects',
};

export default function ProjectDetail({ project, source = 'selected', onClose }: Props) {
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = window.requestAnimationFrame(() => setEntered(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.cancelAnimationFrame(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') triggerClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const triggerClose = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => onClose(), 720);
  };

  const goToContact = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => {
      onClose();
      window.requestAnimationFrame(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }, 720);
  };

  const scrollTo = (target: React.RefObject<HTMLDivElement | null>) => {
    const container = scrollRef.current;
    const el = target.current;
    if (!container || !el) return;
    const top = el.offsetTop - 96;
    container.scrollTo({ top, behavior: 'smooth' });
  };

  const sourceLabel = SOURCE_LABEL[source];

  const visible = entered && !closing;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{
        backgroundColor: '#0E0E0E',
        opacity: visible ? 1 : 0,
        transition: `opacity 700ms ${EASE}`,
      }}
    >
      <div
        ref={scrollRef}
        className="relative w-full h-full overflow-y-auto"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: `transform 800ms ${EASE}`,
        }}
      >
        <div className="sticky top-0 z-30 flex flex-col gap-3 px-[5vw] md:px-[3vw] pt-[2vh] md:pt-[2.4vh] pb-[1.6vh] md:pb-[1.8vh] bg-[#0E0E0E]/70 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={triggerClose}
              className="group inline-flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/30 group-hover:border-white transition-colors duration-300">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.16em]">
                <span className="hidden sm:inline">Back to {sourceLabel}</span>
                <span className="sm:hidden">Back</span>
              </span>
            </button>
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] md:text-xs uppercase tracking-[0.16em] text-white/55 text-right truncate max-w-[55vw]"
            >
              <span className="hidden sm:inline">Doma Build</span>
              <span className="hidden sm:inline mx-2 text-white/25">/</span>
              <span className="hidden sm:inline">{sourceLabel}</span>
              <span className="hidden sm:inline mx-2 text-white/25">/</span>
              <span className="text-white/85">{project.title}</span>
            </nav>
          </div>

          <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.16em]">
            <button
              type="button"
              onClick={() => scrollTo(overviewRef)}
              className="px-3 py-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/60 transition-colors duration-300"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => scrollTo(galleryRef)}
              className="px-3 py-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/60 transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => scrollTo(contactRef)}
              className="px-3 py-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/60 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>

        <div ref={overviewRef} className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: visible ? 'scale(1)' : 'scale(1.06)',
              transition: `transform 1100ms ${EASE}`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          <div className="absolute left-[5vw] right-[5vw] md:left-[3vw] md:right-[3vw] bottom-[5vh] md:bottom-[6vh] text-white">
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2 md:mb-3">
              {project.location} · {project.year}
            </div>
            <h1 className="font-serif leading-[1.02] text-[clamp(32px,7vw,108px)] max-w-full md:max-w-[78vw]">
              {project.title}
            </h1>
            <p className="mt-4 md:mt-6 max-w-full md:max-w-[42vw] text-white/75 text-[14px] md:text-[17px] leading-[1.6]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="px-[5vw] md:px-[3vw] py-[8vh] md:py-[10vh] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-5 md:gap-6 lg:gap-0 lg:space-y-8">
            <Detail label="Location" value={project.location} />
            <Detail label="Year" value={project.year} />
            <Detail label="Scope" value={project.scope} />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="text-white/80 text-[15px] md:text-[19px] leading-[1.7] font-light">
              {project.longDescription}
            </p>
          </div>
        </div>

        <div ref={galleryRef} className="px-[5vw] md:px-[3vw] pb-[10vh] md:pb-[12vh]">
          <div className="flex items-baseline justify-between gap-3 mb-[4vh] md:mb-[5vh]">
            <h2 className="font-serif text-white text-[clamp(22px,3vw,44px)]">
              Inside the build
            </h2>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/45 text-right">
              <span className="hidden sm:inline">Gallery · </span>{project.gallery.length} frames
            </span>
          </div>
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {project.gallery.map((src, i) => {
              const span = galleryClass(i);
              return (
                <div
                  key={src + i}
                  className={`relative overflow-hidden rounded-md ${span}`}
                >
                  <img
                    src={src}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform [transition-duration:1100ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={contactRef}
          className="px-[5vw] md:px-[3vw] pb-[12vh] md:pb-[14vh] flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 border-t border-white/10 pt-[6vh] md:pt-[8vh]"
        >
          <div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">
              Enquire about this project
            </div>
            <h3 className="font-serif text-white text-[clamp(22px,3.4vw,52px)] leading-[1.05] max-w-[28ch]">
              Talk to us about {project.title}.
            </h3>
            <p className="mt-4 text-white/65 text-[14px] md:text-[16px] leading-[1.6] max-w-[52ch]">
              Send us a note and we'll come back with a sensible next step — a site visit, a similar reference, or a candid view of feasibility.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 self-start md:self-auto">
            <button
              onClick={goToContact}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/40 text-white text-xs md:text-sm uppercase tracking-[0.16em] hover:bg-white hover:text-doma-text transition-colors duration-300"
            >
              <span>Contact about this project</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={triggerClose}
              className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-white transition-colors duration-300"
            >
              <span>← Back to {sourceLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/45 mb-1.5 md:mb-2">
        {label}
      </div>
      <div className="font-serif text-white text-[15px] md:text-[24px] leading-[1.2]">
        {value}
      </div>
    </div>
  );
}

function galleryClass(i: number): string {
  const pattern = [
    'col-span-12 md:col-span-7 aspect-[16/10]',
    'col-span-12 md:col-span-5 aspect-[4/5]',
    'col-span-12 md:col-span-4 aspect-[4/5]',
    'col-span-12 md:col-span-8 aspect-[16/9]',
    'col-span-12 md:col-span-6 aspect-[5/4]',
    'col-span-12 md:col-span-6 aspect-[5/4]',
  ];
  return pattern[i % pattern.length];
}
