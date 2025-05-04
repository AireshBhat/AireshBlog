// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { allProjects, allProjectLogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

export async function generateMetadata({ params }) {
  const slug = params.slug
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }))
}

export default function Page({ params }) {
  const slug = params.slug
  const project = allProjects.find((p) => p.slug === slug)
  const projectLogs = allProjectLogs
    .filter((log) => log.project === slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (!project) {
    notFound()
  }

  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-72 md:h-80 lg:h-96">
              <Image
                src={project.image || '/static/images/default-project-image.jpg'}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
              {project.status && (
                <div className="bg-primary-500 absolute top-4 right-4 rounded-full px-4 py-1 text-sm font-semibold text-white">
                  {project.status}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                <PageTitle>
                  <span className="text-white drop-shadow-lg">{project.title}</span>
                </PageTitle>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-lg leading-7 font-medium text-gray-500 dark:text-gray-400">
                {project.summary}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.tags && (
                  <div className="flex flex-wrap">
                    {project.tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                      GitHub
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50 flex items-center rounded-lg px-3 py-1.5 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {project.startDate && (
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Started: {formatDate(project.startDate, siteMetadata.locale)}
                  </span>
                  {project.endDate && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Completed: {formatDate(project.endDate, siteMetadata.locale)}
                      </span>
                    </>
                  )}
                  {!project.endDate && project.status === 'In Progress' && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-primary-500 text-sm font-medium">In Progress</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </header>

          <div className="divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10">
                <MDXLayoutRenderer code={project.body.code} components={components} />
              </div>
            </div>

            <footer className="mt-8 xl:sticky xl:top-24 xl:mt-0">
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
                  <h2 className="text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Project Details
                  </h2>
                  <div className="mt-4 space-y-4">
                    {project.role && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Role
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {project.role}
                        </p>
                      </div>
                    )}
                    {project.stack && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Tech Stack
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 rounded-full px-2 py-1 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.team && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Team Size
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {project.team}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Daily Logs Section */}
      <div className="mt-16 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Project Log
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Daily updates and progress tracking
          </p>
        </div>

        {projectLogs.length === 0 ? (
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
        ) : (
          <div className="mt-8 space-y-10">
            {projectLogs.map((log) => (
              <div
                key={log.slug}
                className="group relative rounded-xl border border-gray-200 p-6 transition-all hover:shadow-md dark:border-gray-700"
              >
                <div className="bg-primary-500 absolute top-6 -left-3 h-6 w-6 rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {log.title}
                  </h3>
                  <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {formatDate(log.date, siteMetadata.locale)}
                  </time>
                  <div className="prose dark:prose-invert mt-4">
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
        )}
      </div>
    </SectionContainer>
  )
}
