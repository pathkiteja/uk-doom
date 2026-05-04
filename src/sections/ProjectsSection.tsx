import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Victoria Mews Residence',
    image: '/project_primary_residence.jpg',
    size: 'large',
  },
  {
    title: 'Fleet Street Loft',
    image: '/project_loft.jpg',
    size: 'tall',
  },
  {
    title: 'Brixton Community Hall',
    image: '/project_community.jpg',
    size: 'short',
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
  const labelRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTl.fromTo(
        primaryCardRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        secondaryCard1Ref.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        secondaryCard2Ref.current,
        { y: '60vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        labelRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        section.querySelectorAll('.card-title'),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        primaryCardRef.current,
        { x: 0, opacity: 1 },
        { x: '-20vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        secondaryCard1Ref.current,
        { x: 0, opacity: 1 },
        { x: '20vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        secondaryCard2Ref.current,
        { y: 0, opacity: 1 },
        { y: '20vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        labelRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

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

  return (
    <section ref={sectionRef} className="pinned-section z-20 bg-doma-bg">
      <div
        ref={labelRef}
        className="absolute left-[3vw] top-[8vh] label-upper will-change-transform z-30"
      >
        SELECTED PROJECTS
      </div>

      <div
        ref={primaryCardRef}
        className="absolute left-[3vw] top-[18vh] w-[62vw] h-[64vh] will-change-transform"
      >
        <div
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          className="relative w-full h-full rounded-md overflow-hidden shadow-card group cursor-pointer"
          style={innerStyle(0)}
        >
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute left-[2.2vw] bottom-[2.6vh] text-white">
            <h3 className="card-title text-xl md:text-2xl font-serif transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
              {projects[0].title}
            </h3>
          </div>
          <button className="absolute right-[2.2vw] bottom-[2.6vh] px-5 py-2 border border-white/40 text-white text-xs uppercase tracking-wider rounded-full opacity-90 transition-[opacity,background-color,color,border-color,transform] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:-translate-y-1 hover:bg-white hover:text-doma-text">
            View Project
          </button>
        </div>
      </div>

      <div
        ref={secondaryCard1Ref}
        className="absolute left-[67vw] top-[18vh] w-[30vw] h-[40vh] will-change-transform"
      >
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className="relative w-full h-full rounded-md overflow-hidden shadow-card group cursor-pointer"
          style={innerStyle(1)}
        >
          <img
            src={projects[1].image}
            alt={projects[1].title}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute left-[1.6vw] bottom-[2.2vh] text-white">
            <h3 className="card-title text-lg md:text-xl font-serif transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
              {projects[1].title}
            </h3>
          </div>
        </div>
      </div>

      <div
        ref={secondaryCard2Ref}
        className="absolute left-[67vw] top-[60vh] w-[30vw] h-[22vh] will-change-transform"
      >
        <div
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className="relative w-full h-full rounded-md overflow-hidden shadow-card group cursor-pointer"
          style={innerStyle(2)}
        >
          <img
            src={projects[2].image}
            alt={projects[2].title}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute left-[1.6vw] bottom-[2.2vh] text-white">
            <h3 className="card-title text-lg md:text-xl font-serif transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
              {projects[2].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
