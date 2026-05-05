import { useState, useEffect } from 'react';

type CategoryKey = 'commercial' | 'residential' | 'community';

const categories: { label: string; category: CategoryKey }[] = [
  { label: 'Commercial', category: 'commercial' },
  { label: 'Residential', category: 'residential' },
  { label: 'Community', category: 'community' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<CategoryKey | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    const prevTouch = (document.body.style as CSSStyleDeclaration).touchAction;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
      document.body.style.touchAction = prevTouch;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setMobileExpanded(null);
  }, [menuOpen]);

  const goTo = (href: string) => {
    setMenuOpen(false);
    window.setTimeout(() => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (href === '#home')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 320);
  };

  const openCategory = (
    category: CategoryKey,
    status: 'present' | 'past' = 'present'
  ) => {
    setMenuOpen(false);
    window.setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent('projects:openCategory', {
            detail: { category, status },
          })
        );
      }, 380);
    }, 320);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[400] transition-all duration-500 ${
          isScrolled
            ? 'bg-doma-bg/80 backdrop-blur-md shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-[3vw] py-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className={`text-lg font-serif tracking-tight transition-all duration-500 ${
              isScrolled
                ? 'text-doma-text opacity-100 translate-y-0 pointer-events-auto'
                : 'text-white opacity-0 -translate-y-2 pointer-events-none'
            }`}
            aria-hidden={!isScrolled}
          >
            Doma Build
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ml-auto ${
              isScrolled ? 'text-doma-text' : 'text-white'
            }`}
          >
            Menu
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[450] bg-doma-dark transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ overscrollBehavior: 'contain' }}
      >
        <div
          className="h-full flex flex-col px-[5vw] md:px-[3vw] py-4 overflow-y-auto"
          style={{ overscrollBehavior: 'contain' }}
        >
          <div className="flex items-center justify-between mb-8 md:mb-16">
            <span className="text-lg font-serif text-white tracking-tight">
              Doma Build
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
            <ul className="lg:col-span-5 flex flex-col gap-2 md:gap-3">
              <NavMain index="01" label="Home" onClick={() => goTo('#home')} />

              <NavMain
                index="02"
                label="Projects"
                onClick={() => goTo('#projects')}
              />

              <NavMain
                index="03"
                label="Contact"
                onClick={() => goTo('#contact')}
              />
            </ul>

            <div className="lg:col-span-7 lg:pl-[2vw] lg:border-l lg:border-white/10">
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-doma-gold mb-4 md:mb-5">
                Selected Projects
              </div>

              {/* Mobile: collapsible per-category list with arrow */}
              <ul className="lg:hidden space-y-2 mb-8 md:mb-10">
                {categories.map((c) => {
                  const open = mobileExpanded === c.category;
                  return (
                    <li
                      key={c.label}
                      className="border-b border-white/10 pb-2"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(open ? null : c.category)
                        }
                        className="w-full flex items-center justify-between gap-3 py-2 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-serif text-white/90 text-[clamp(22px,5.5vw,32px)] leading-[1.05]">
                          {c.label}
                        </span>
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white/70 transition-transform duration-500 ${
                            open ? 'rotate-90 border-doma-gold text-doma-gold' : ''
                          }`}
                          aria-hidden
                        >
                          →
                        </span>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-2 pb-3 flex items-center gap-5 text-[12px] uppercase tracking-[0.22em]">
                            <button
                              onClick={() =>
                                openCategory(c.category, 'present')
                              }
                              className="text-white/80 hover:text-doma-gold transition-colors"
                            >
                              Present
                            </button>
                            <span className="text-white/20">/</span>
                            <button
                              onClick={() => openCategory(c.category, 'past')}
                              className="text-white/80 hover:text-doma-gold transition-colors"
                            >
                              Past
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop: two side-by-side columns — Present + Past */}
              <div className="hidden lg:grid grid-cols-2 gap-x-[2vw] mb-10">
                <CategoryColumn
                  status="present"
                  onPick={(cat) => openCategory(cat, 'present')}
                />
                <CategoryColumn
                  status="past"
                  onPick={(cat) => openCategory(cat, 'past')}
                />
              </div>

              <div className="pt-6 md:pt-8 border-t border-white/10">
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/45 mb-3">
                  Studio
                </div>
                <p className="text-white/65 text-[13px] md:text-[14px] leading-[1.65] max-w-[44ch]">
                  Doma Build Contractors Ltd — design-build &amp; general
                  contracting across residential, commercial, and community
                  work.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 pb-2 mt-6 md:mt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-5">
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/45 break-words">
              133 West Hendon Broadway, London NW9 7DY · +44 (0)20 8793 4511
            </div>
            <button
              onClick={() => goTo('#contact')}
              className="inline-flex items-center gap-3 px-6 md:px-7 py-2.5 md:py-3 border border-doma-gold text-doma-gold text-xs md:text-sm uppercase tracking-[0.16em] rounded-full hover:bg-doma-gold hover:text-doma-dark transition-colors duration-300 self-start md:self-auto"
            >
              <span>Start a project</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

type CategoryColumnProps = {
  status: 'present' | 'past';
  onPick: (category: CategoryKey) => void;
};

function CategoryColumn({ status, onPick }: CategoryColumnProps) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 mb-4">
        {status === 'present' ? 'Present' : 'Past'}
      </div>
      <ul className="space-y-2">
        {categories.map((c) => (
          <li key={c.label}>
            <button
              type="button"
              onClick={() => onPick(c.category)}
              className="group inline-flex items-baseline gap-3 text-left text-white/85 hover:text-doma-gold transition-colors duration-300"
            >
              <span className="inline-block w-6 h-px bg-white/30 group-hover:bg-doma-gold group-hover:w-10 transition-all duration-300" />
              <span className="font-serif text-[clamp(20px,2.2vw,30px)] leading-[1.05]">
                {c.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

type NavMainProps = {
  index: string;
  label: string;
  onClick: () => void;
};

function NavMain({ index, label, onClick }: NavMainProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="group flex items-baseline gap-4 md:gap-7 text-left w-full"
      >
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/35 pt-2 md:pt-3 group-hover:text-doma-gold transition-colors duration-300 flex-shrink-0">
          {index}
        </span>
        <span className="font-serif text-white/85 text-[clamp(34px,8vw,108px)] leading-[1.02] group-hover:text-doma-gold transition-colors duration-300">
          {label}
        </span>
      </button>
    </li>
  );
}
