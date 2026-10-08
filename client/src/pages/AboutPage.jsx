import { motion } from 'framer-motion';
import { education } from '../data/education';

const qualities = ['Problem Solver', 'Quick Learner', 'Team Player', 'Tech Enthusiast'];

const AboutPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center"
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <img
            src="/shahanaj-photo.jpg"
            alt="Shahanaj Shaikh"
            className="h-[460px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">About Me</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Let me tell you about myself
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I am Shahanaj Shaikh, a Computer Engineering Student and MERN Stack Developer with a strong interest in AI and digital product development. I enjoy building modern web applications that are practical, visually polished, and user-focused.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            My journey has been driven by curiosity, continuous learning, and the desire to solve meaningful problems with technology. I like working on systems that blend clean design, reliable engineering, and thoughtful user experiences.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {qualities.map((quality) => (
              <span
                key={quality}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {quality}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="font-heading text-3xl font-semibold text-slate-900 dark:text-white">Education</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">{item.year}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.institution}</p>
              <p className="mt-3 text-base font-medium text-slate-800 dark:text-slate-100">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
