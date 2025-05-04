import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import FeaturedProjects from '@/components/FeaturedProjects'

const MAX_DISPLAY = 3

export default function Home({ posts, projects }) {
  console.log({ posts, projects })
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse items-center space-y-4 pt-6 pb-8 md:flex-row md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Hi, I'm <span className="text-primary-500">Airesh Bhat</span>
          </h1>
          <h2 className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Frontend Developer & UI/UX Designer
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
            I build beautiful, accessible, and performant web applications with modern technologies.
            Welcome to my digital garden where I share my projects, thoughts, and experiences.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/projects"
              className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Read Blog
            </Link>
          </div>
        </div>
        <div className="mb-8 flex w-full justify-center md:mb-0 md:w-1/2">
          <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
            <Image src="/static/images/profile.jpg" alt="Profile" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <FeaturedProjects projects={projects} />

      {/* Recent Posts Section */}
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Recent Posts
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Latest articles and tutorials
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && <p>No posts found.</p>}

          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            const firstImage =
              images && images.length > 0 ? images[0] : '/static/images/default-post-image.jpg'

            return (
              <div
                key={slug}
                className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-gray-800/50 dark:hover:bg-gray-800/80"
              >
                <div className="relative h-48 overflow-hidden">
                  <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                    <Image
                      src={firstImage}
                      alt={title}
                      fill
                      className="object-cover object-center transition-transform duration-200 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center text-sm">
                      <time dateTime={date} className="text-gray-500 dark:text-gray-400">
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                    </div>
                    <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                      <h3 className="mt-2 text-xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {title}
                      </h3>
                    </Link>
                    <p className="mt-3 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                      {summary}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap">
                      {tags && tags.slice(0, 3).map((tag) => <Tag key={tag} text={tag} />)}
                      {tags && tags.length > 3 && (
                        <span className="text-primary-500 ml-2 text-sm">+{tags.length - 3}</span>
                      )}
                    </div>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 inline-flex items-center text-sm font-medium"
                      aria-label={`Read "${title}"`}
                    >
                      Read more
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="py-12">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Skills & Technologies
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Replace with your own skills */}
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Node.js',
            'GraphQL',
            'MongoDB',
            'Firebase',
            'AWS',
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center rounded-lg bg-gray-50 p-4 font-medium text-gray-800 shadow-sm transition-all hover:shadow-md dark:bg-gray-800 dark:text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <div className="mt-8 rounded-xl bg-gray-50 p-8 shadow-md dark:bg-gray-800/60">
          <div className="items-center justify-between md:flex">
            <div className="mb-6 max-w-2xl md:mb-0">
              <h2 className="text-2xl leading-tight font-bold text-gray-900 dark:text-gray-100">
                Subscribe to my newsletter
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Get notified when I publish new articles and projects. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex-shrink-0">
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
