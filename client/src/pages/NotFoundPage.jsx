import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-sky-50 p-8 text-center shadow-soft sm:p-12 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-indigo-200 bg-white/70 text-5xl font-bold text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          404
        </div>
        <h1 className="font-heading text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">Oops! Page not found</h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-medium text-white">
          <ArrowLeft size={18} />
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
