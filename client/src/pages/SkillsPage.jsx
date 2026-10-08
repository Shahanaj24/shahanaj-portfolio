import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skillGroups } from '../data/skills';

const SkillsPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">Skills</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Technologies I Work With
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            I build with a strong mix of frontend, backend, database, and AI tools to create full-featured and scalable products.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} title={group.title} icon={group.icon} items={group.items} />
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default SkillsPage;
