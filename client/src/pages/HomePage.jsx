import { ArrowRight, Code2, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-sky-50 px-5 py-8 shadow-soft sm:px-8 lg:px-10 lg:py-10 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
      >
        <div className="absolute -right-20 top-8 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">Hi, I&apos;m</p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Shahanaj Shaikh
            </h1>
            <p className="mt-4 text-lg text-indigo-700 sm:text-xl dark:text-indigo-100">
              MERN Stack Developer | AI Enthusiast
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              I build modern web applications and explore AI to create useful and user-friendly solutions. Passionate about clean code, problem solving, and continuous learning.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  View My Projects
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="/resumes/Shahanaj_Full_Stack_CV.pdf" download>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Download size={18} />
                  Download Full Stack Resume
                </Button>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-200 bg-white/60 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <img
                src="/shahanaj-photo.jpg"
                alt="Shahanaj Shaikh"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex flex-wrap gap-3 text-sm text-slate-700 sm:text-base dark:text-slate-200">
          {['Code', 'Build', 'Grow'].map((item) => (
            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-white/5">
              <Code2 size={15} />
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
        className="mt-20"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <SectionHeading
            eyebrow="About"
            title="Let me tell you about myself"
            description="I enjoy turning ideas into polished digital products that help users and businesses grow."
          />
          <Link to="/about" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:inline-flex">
            Know more <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.4fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <img
              src="/shahanaj-photo.jpg"
             alt="Shahanaj Shaikh"
              className="h-64 w-64 rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">{item.year}</p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.institution}</p>
                <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-100">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
        className="mt-20"
      >
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="I enjoy building full-stack applications, integrating AI features, and solving real-world challenges with clean engineering practices."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.slice(0, 6).map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  {group.icon}
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
        className="mt-20"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Some of my work"
            description="Here are a few projects I’ve built while learning and solving real-world problems with modern technologies."
          />
          <Link to="/projects" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:inline-flex">
            Explore all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <img src={project.image} alt={project.title} className="h-48 w-full rounded-2xl object-cover" />
              <div className="mt-4">
                <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.slug}`} className="text-sm font-medium text-indigo-600">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
        className="mt-20 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-indigo-50 to-cyan-50 p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">Ready to build</p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-slate-900 dark:text-white">Let’s create something impactful.</h3>
          </div>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Contact Me
              <Sparkles size={18} />
            </Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default HomePage;
