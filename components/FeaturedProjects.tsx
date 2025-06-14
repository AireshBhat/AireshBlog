import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'

const FeaturedProjects = ({ projects }) => {
  // Only show featured projects (or the first 3 if featured flag not set)
  let featuredProjects = projects?.filter((project) => project.featured).slice(0, 3)

  if ((featuredProjects?.length === 0 || !featuredProjects) && projects?.length > 0) {
    featuredProjects = projects.slice(0, 3)
  }

  if (!featuredProjects || featuredProjects.length === 0) {
    return null
  }

  return (
    <div className="py-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
          Featured Projects
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A selection of my recent work
        </p>
      </div>

      <div className="container">
        {featuredProjects.map((project, index) => (
          <div
            key={project.slug}
            className={`my-8 flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Project Image */}
            <div className="relative h-64 w-full md:h-auto md:w-2/5">
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View "${project.title}" project`}
              >
                <Image
                  src={project.image || '/static/images/default-project-image.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                />
              </Link>
              {project.status && (
                <div className="bg-primary-500 absolute top-2 right-2 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  {project.status}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-800">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View "${project.title}" project`}
                >
                  <h3 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                </Link>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{project.summary}</p>
                {project.tags && (
                  <div className="mt-4 flex flex-wrap">
                    {project.tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center">
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 flex-1 rounded-lg py-2 text-center text-sm font-medium text-white transition-colors"
                  aria-label={`View "${project.title}" project`}
                >
                  View Project
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                    aria-label="View GitHub repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                    aria-label="View live demo"
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
                      className="h-5 w-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  )
}

export default FeaturedProjects
