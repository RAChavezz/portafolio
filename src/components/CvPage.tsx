import ReactMarkdown from 'react-markdown';
import { cvMarkdown } from '../data/cv-md';

export default function CvPage() {
  function goBack() {
    // Always go back to the main portfolio view
    window.location.href = import.meta.env.BASE_URL;
  }

  function printCv() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8">
        <header className="mb-4 flex items-center justify-between gap-2 print:hidden">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-radius-md border border-border bg-card px-3 py-2 text-sm text-fg shadow-elevation-1 transition-shadow hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            ← Back to portfolio
          </button>
          <button
            type="button"
            onClick={printCv}
            className="inline-flex items-center gap-2 rounded-radius-md bg-primary px-3 py-2 text-sm text-primary-contrast shadow-elevation-1 transition-shadow hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Print / Save as PDF
          </button>
        </header>

        <article className="rounded-radius-lg border border-border bg-card px-4 py-5 text-sm leading-relaxed shadow-elevation-1 sm:px-6 sm:py-6 print:border-0 print:bg-white print:shadow-none">
          <ReactMarkdown
            components={{
              h1: (props) => <h1 className="mb-2 text-2xl font-bold sm:text-3xl" {...props} />,
              h2: (props) => <h2 className="mt-4 text-xl font-semibold sm:text-2xl" {...props} />,
              h3: (props) => <h3 className="mt-3 text-lg font-semibold" {...props} />,
              hr: () => <hr className="my-4 border-border" />,
              p: (props) => <p className="mb-2" {...props} />,
              ul: (props) => <ul className="mb-2 list-disc space-y-1 pl-5" {...props} />,
              li: (props) => <li className="leading-snug" {...props} />,
              strong: (props) => <strong className="font-semibold" {...props} />,
            }}
          >
            {cvMarkdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}


