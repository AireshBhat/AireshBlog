import { formatDate } from 'pliny/utils/formatDate'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import siteMetadata from '@/data/siteMetadata'

const ProjectTimeline = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return (
      <div className="rounded-xl bg-gray-50 p-8 text-center dark:bg-gray-800/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
        <p className="text-gray-600 dark:text-gray-400">No project logs available yet.</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          Check back later for updates on this project.
        </p>
      </div>
    )
  }

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent md:before:mx-auto md:before:translate-x-0 dark:before:via-gray-700">
      {logs.map((log, index) => (
        <div
          key={log.slug}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
        >
          {/* Timeline Item Dot */}
          <div className="bg-primary-500 absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white shadow md:static md:translate-x-0 dark:border-gray-900">
            <span className="text-sm font-bold">{index + 1}</span>
          </div>

          {/* Timeline Content */}
          <div className="ml-16 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-md md:mx-8 md:w-2/5 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{log.title}</h3>
              <time className="mt-1 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
                {formatDate(log.date, siteMetadata.locale)}
              </time>
            </div>

            <div className="prose prose-sm dark:prose-invert mt-3 max-w-none">
              <MDXLayoutRenderer code={log.body.code} components={components} />
            </div>

            {log.tags && (
              <div className="mt-4 flex flex-wrap">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 mb-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectTimeline
