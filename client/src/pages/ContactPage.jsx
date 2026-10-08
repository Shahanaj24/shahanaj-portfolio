import { motion } from 'framer-motion';
import { BriefcaseBusiness, GitBranch, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">Contact</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-slate-900 dark:text-white">Let&apos;s Connect</h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <Mail className="mt-0.5 text-indigo-600" size={18} />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <a href="mailto:shahanaj.22420256@viit.ac.in" className="text-base font-medium text-slate-900 dark:text-white">
                  shahanaj.22420256@viit.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <MapPin className="mt-0.5 text-indigo-600" size={18} />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-base font-medium text-slate-900 dark:text-white">Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <BriefcaseBusiness className="mt-0.5 text-indigo-600" size={18} />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/shahanaj-shaikh-081587352/" target="_blank" rel="noreferrer" className="text-base font-medium text-slate-900 dark:text-white">
                  linkedin.com/in/shahanaj-shaikh-081587352
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <GitBranch className="mt-0.5 text-indigo-600" size={18} />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                <a href="https://github.com/Shahanaj24" target="_blank" rel="noreferrer" className="text-base font-medium text-slate-900 dark:text-white">
                  github.com/Shahanaj24
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
          <ContactForm />
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
