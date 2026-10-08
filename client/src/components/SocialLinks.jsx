import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

const links = [
  { icon: GitBranch, href: 'https://github.com/Shahanaj24', label: 'GitHub' },
  { icon: BriefcaseBusiness, href: 'https://www.linkedin.com/in/shahanaj-shaikh-081587352/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shahanaj.22420256@viit.ac.in', label: 'Email' },
];

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
