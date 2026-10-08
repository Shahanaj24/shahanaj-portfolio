import { motion } from 'framer-motion';
import { education } from '../data/education';
import Button from '../components/Button';

const ResumePage = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">Resume</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Education & Experience
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={item.title} className="relative pl-8">
                  {index !== education.length - 1 && <div className="absolute left-[0.58rem] top-2 h-full w-px bg-slate-200 dark:bg-slate-700" />}
                  <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
                  <p className="text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">{item.year}</p>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.institution}</p>
                  <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Skills</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Tailwind CSS', 'AI', 'REST APIs', 'Git', 'Docker'].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
              <h2 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Download Resume</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                I am available for software engineering opportunities, internships, and full-time roles in product development and AI-driven applications.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="/resumes/Shahanaj_Shaikh_AI.pdf" download className="inline-flex">
                  <Button variant="primary" size="md">
                    Download AI Resume
                  </Button>
                </a>
                <a href="/resumes/Shahanaj_Full_Stack_CV.pdf" download className="inline-flex">
                  <Button variant="secondary" size="md">
                    Download Full Stack Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ResumePage;
