type Props = {
  variant?: 'light' | 'dark';
};

export default function Footer({ variant = 'dark' }: Props) {
  const isDark = variant === 'dark';
  const heading = isDark ? 'text-white/85' : 'text-doma-text';
  const text = isDark ? 'text-white/55' : 'text-doma-text/60';
  const muted = isDark ? 'text-white/40' : 'text-doma-text/45';
  const hover = isDark ? 'hover:text-white' : 'hover:text-doma-text';
  const border = isDark ? 'border-white/10' : 'border-doma-text/10';
  const accent = 'text-doma-gold';

  return (
    <div className={`px-[5vw] md:px-[3vw] pt-[5vh] md:pt-[6vh] pb-[3vh] md:pb-[4vh] border-t ${border}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 mb-[4vh] md:mb-[5vh]">
        <div className="sm:col-span-2 lg:col-span-5">
          <div className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] ${accent} mb-3 md:mb-4`}>
            Doma Build
          </div>
          <h3 className={`font-serif ${heading} text-[clamp(20px,2.6vw,32px)] leading-[1.15] mb-3 md:mb-4 max-w-[22ch]`}>
            Doma Build Contractors Ltd
          </h3>
          <p className={`${text} text-[13px] md:text-[14px] leading-[1.65] max-w-[34ch]`}>
            Design-build &amp; general contracting across residential,
            commercial and community work.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] ${muted} mb-3 md:mb-4`}>
            Studio
          </div>
          <p className={`${text} text-[13px] md:text-[14px] leading-[1.7]`}>
            133 West Hendon Broadway
            <br />
            London, NW9 7DY
            <br />
            United Kingdom
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] ${muted} mb-3 md:mb-4`}>
            Contact
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+442087934511"
                className={`${heading} ${hover} text-[14px] md:text-[15px] transition-colors break-all sm:break-normal`}
              >
                +44 (0)20 8793 4511
              </a>
            </li>
            <li>
              <a
                href="tel:+447535697887"
                className={`${heading} ${hover} text-[14px] md:text-[15px] transition-colors break-all sm:break-normal`}
              >
                +44 (0)7535 697 887
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 pt-4 md:pt-5 border-t ${border}`}
      >
        <p className={`${muted} text-xs md:text-[13px]`}>
          © 2026 Doma Build Contractors Ltd
        </p>
        <div className={`flex items-center gap-5 md:gap-6 text-xs md:text-[13px] ${text}`}>
          <a href="#" className={`${hover} transition-colors`}>
            Privacy
          </a>
          <a href="#" className={`${hover} transition-colors`}>
            Terms
          </a>
          <a href="#" className={`${hover} transition-colors`}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
