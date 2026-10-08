import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const MobileMenu = ({ navItems, theme, onToggleTheme, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.18 }}
          className="absolute inset-x-3 top-[4.3rem] z-40 overflow-hidden rounded-2xl border border-slate-200 bg-white/94 p-4 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/95"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-300">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 p-2.5 dark:border-slate-700">
              <span className="text-sm text-slate-600 dark:text-slate-300">Theme</span>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
