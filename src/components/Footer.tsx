type Props = {
  variant?: 'light' | 'dark';
};

export default function Footer({ variant = 'dark' }: Props) {
  const text = variant === 'dark' ? 'text-white/40' : 'text-doma-text/45';
  const hover = variant === 'dark' ? 'hover:text-white' : 'hover:text-doma-text';
  const border =
    variant === 'dark' ? 'border-white/10' : 'border-doma-text/10';

  return (
    <div
      className={`px-[5vw] md:px-[3vw] py-[3vh] md:py-[4vh] border-t ${border}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p className={`${text} text-xs md:text-sm text-center`}>
          © 2026 Doma Build Contractors Ltd
        </p>
        <div
          className={`flex items-center gap-5 md:gap-6 text-xs md:text-sm ${text}`}
        >
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
