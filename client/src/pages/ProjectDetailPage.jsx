import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="font-heading text-4xl font-semibold text-slate-900 dark:text-white">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-indigo-600">
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <article className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <img src={project.image} alt={project.title} className="h-72 w-full object-cover sm:h-96" />

        <div className="space-y-8 p-5 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{project.category}</p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{project.longDescription}</p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
              <GitBranch size={16} />
              GitHub
            </a>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-sm font-medium text-white">
                <ExternalLink size={16} />
                View Live Application
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <ExternalLink size={16} />
                Live Project Not Available
              </span>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Problem Statement</h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.problemStatement}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Solution</h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">Architecture</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.architecture}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">Challenges</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.challenges}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">What I learned</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.learned}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetailPage;
