import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AboutArea = {
  id: 'expertise' | 'team' | 'services';
  num: string;
  title: string;
  intro: string;
  body: string;
  image: string;
  highlights: { label: string; value: string }[];
  bullets?: string[];
};

const areas: AboutArea[] = [
  {
    id: 'expertise',
    num: '01',
    title: 'Our Expertise',
    intro:
      'Eighteen years of careful, considered construction across residential, commercial, and community work.',
    body:
      'With over 18 years of experience in the construction industry, Doma Build Contractors Ltd has become a trusted name in the field of construction. Our team of experts has the knowledge, skills, and expertise to handle any project, big or small. We have completed numerous projects ranging from residential homes to commercial buildings, and our clients can attest to our commitment to quality and excellence.',
    image: '/services_building.jpg',
    highlights: [
      { label: 'Experience', value: '18+ yrs' },
      { label: 'Delivered', value: '120+ projects' },
      { label: 'Accredited', value: 'FMB' },
    ],
  },
  {
    id: 'team',
    num: '02',
    title: 'Our Team',
    intro:
      'Skilled hands, considered minds — a small senior team that owns each build end to end.',
    body:
      'Our team is made up of experienced and skilled individuals who are passionate about what they do. From our project managers to our skilled tradespeople, we work together to ensure that every project is completed to the highest standard. We believe in building lasting relationships with our clients, and it shows in the way we approach every project.',
    image: '/about_site_work.jpg',
    highlights: [
      { label: 'Senior leads', value: '6 partners' },
      { label: 'Trades on roster', value: '40+' },
      { label: 'Avg. tenure', value: '9 years' },
    ],
  },
  {
    id: 'services',
    num: '03',
    title: 'Our Services',
    intro:
      'A complete vocabulary of build — design-build, contracting, management — sized to the brief.',
    body:
      'At Doma Build Contractors Ltd, we offer a wide range of services to meet the diverse needs of our clients. Our services include design-build, general contracting, construction management, and more. We work closely with our clients to understand their unique needs and deliver solutions that exceed their expectations. We are committed to delivering projects that are on time, within budget, and of the highest quality.',
    image: '/archive_03.jpg',
    highlights: [
      { label: 'Engagements', value: '4 models' },
      { label: 'On-budget', value: '96%' },
      { label: 'On-time', value: '94%' },
    ],
    bullets: [
      'Design & Build',
      'General Contracting',
      'Construction Management',
      'Loft Conversions',
      'Basement Excavation',
      'Extensions',
      'Refurbishment',
      'Heritage & Listed',
    ],
  },
];

const credentials: { value: string; label: string }[] = [
  { value: '18+', label: 'Years of build experience' },
  { value: '120+', label: 'Projects delivered' },
  { value: '96%', label: 'On-budget delivery' },
  { value: '94%', label: 'On-time delivery' },
  { value: 'FMB', label: 'Federation accredited' },
];

const goToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const credsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        credsRef.current?.querySelectorAll('.cred-stat') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: credsRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('.pillar-row').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.6,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-30 bg-doma-bg pt-[14vh] pb-[12vh] md:pt-[16vh] md:pb-[14vh] overflow-hidden"
    >
      <div className="absolute left-[5vw] md:left-[3vw] top-[5vh] md:top-[6vh] label-upper">
        ABOUT
      </div>

      <div
        ref={headingRef}
        className="px-[5vw] md:px-[3vw] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-[8vh] md:mb-[10vh] will-change-transform"
      >
        <div className="lg:col-span-7">
          <h2 className="section-heading text-doma-text leading-[1.02] max-w-[18ch]">
            A team that builds with clarity.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-doma-text/70 text-[15px] md:text-[17px] leading-[1.65] max-w-[44ch]">
            Three things shape every project we deliver — the depth of what we
            know, the people on site, and the way we hold the build together.
          </p>
          <div className="mt-5 md:mt-6 inline-flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-doma-muted">
            <span className="w-8 h-px bg-doma-text/30" />
            <span>Doma Build · since 2007</span>
          </div>
        </div>
      </div>

      <div
        ref={credsRef}
        className="border-y border-doma-text/10 bg-doma-text/[0.02]"
      >
        <div className="px-[5vw] md:px-[3vw] grid grid-cols-2 md:grid-cols-5">
          {credentials.map((c, i) => (
            <div
              key={c.label}
              className={`cred-stat px-3 sm:px-4 md:px-6 py-6 md:py-9 will-change-transform border-doma-text/10
                ${i % 2 === 1 ? 'border-l md:border-l-0' : ''}
                ${i >= 2 ? 'border-t md:border-t-0' : ''}
                ${i > 0 ? 'md:border-l' : ''}`}
            >
              <div className="font-serif text-doma-text text-[clamp(28px,3.6vw,56px)] leading-[1] tabular-nums">
                {c.value}
              </div>
              <div className="mt-2.5 md:mt-4 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-doma-muted leading-[1.4] max-w-[20ch]">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={pillarsRef}
        className="mt-[10vh] md:mt-[14vh] flex flex-col gap-[10vh] md:gap-[14vh]"
      >
        {areas.map((area, idx) => (
          <PillarRow
            key={area.id}
            area={area}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      <div className="mt-[12vh] md:mt-[14vh] px-[5vw] md:px-[3vw] border-t border-doma-text/10 pt-[6vh] md:pt-[8vh] flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
        <div>
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-doma-muted mb-3 md:mb-4">
            Next step
          </div>
          <h3 className="font-serif text-doma-text text-[clamp(24px,3.6vw,56px)] leading-[1.05] max-w-[26ch]">
            Want to understand how we'd hold your build together?
          </h3>
        </div>
        <button
          onClick={goToContact}
          className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-doma-text text-doma-text text-xs md:text-sm uppercase tracking-[0.18em] font-semibold hover:bg-doma-text hover:text-doma-bg transition-colors duration-500 self-start md:self-auto shrink-0"
        >
          <span>Start a conversation</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

type PillarProps = {
  area: AboutArea;
  reverse: boolean;
};

function PillarRow({ area, reverse }: PillarProps) {
  return (
    <div className="pillar-row px-[5vw] md:px-[3vw] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start will-change-transform">
      <div
        className={`lg:col-span-7 ${reverse ? 'lg:order-2 lg:col-start-6' : ''}`}
      >
        <div className="relative w-full aspect-[16/10] md:aspect-[3/2] rounded-md overflow-hidden shadow-card group">
          <img
            src={area.image}
            alt={area.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:1100ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          <div className="absolute left-5 md:left-7 bottom-5 md:bottom-7 flex items-center gap-3 text-white">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/85 tabular-nums">
              {area.num} / 03
            </span>
            <span className="w-10 h-px bg-white/50" />
          </div>
        </div>
      </div>

      <div
        className={`lg:col-span-5 ${reverse ? 'lg:order-1 lg:col-start-1 lg:pr-[3vw]' : 'lg:pl-[2vw]'}`}
      >
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-doma-gold mb-4 md:mb-5">
          {area.num} — Pillar
        </div>
        <h3 className="font-serif text-doma-text text-[clamp(28px,4.2vw,68px)] leading-[1.05] mb-5 md:mb-6">
          {area.title}
        </h3>
        <p className="text-doma-text/85 text-[15px] md:text-[18px] leading-[1.65] max-w-[46ch] mb-5 md:mb-6 font-light">
          {area.intro}
        </p>
        <p className="text-doma-text/70 text-[14px] md:text-[16px] leading-[1.7] max-w-[52ch] mb-7 md:mb-9 font-light">
          {area.body}
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-doma-text/10 pt-5 md:pt-6">
          {area.highlights.map((h) => (
            <div key={h.label}>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-doma-muted mb-1.5 md:mb-2 leading-[1.4]">
                {h.label}
              </div>
              <div className="font-serif text-doma-text text-[16px] md:text-[22px] leading-[1.15] tabular-nums">
                {h.value}
              </div>
            </div>
          ))}
        </div>

        {area.bullets && (
          <ul className="mt-7 md:mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-1 md:gap-y-2 border-t border-doma-text/10 pt-5 md:pt-6">
            {area.bullets.map((b) => (
              <li
                key={b}
                className="flex items-baseline gap-3 py-2 md:py-2.5 border-b border-doma-text/8 text-doma-text"
              >
                <span className="inline-block w-5 md:w-6 h-px bg-doma-gold flex-shrink-0 translate-y-[-3px]" />
                <span className="text-[13px] md:text-[15px]">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
