import { Moon, SunMedium } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
