import { ArrowUp, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Shahanaj Shaikh</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">MERN Stack Developer | AI Enthusiast</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href="https://github.com/Shahanaj24" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-indigo-600">
              <GitBranch size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shahanaj-shaikh-081587352/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-indigo-600">
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <a href="mailto:shahanaj.22420256@viit.ac.in" className="inline-flex items-center gap-2 hover:text-indigo-600">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shahanaj Shaikh</p>
          <p>Built with React & Node.js</p>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollTop}
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
