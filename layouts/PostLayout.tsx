import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags, images } = content
  const basePath = path.split('/')[0]
  const displayImage =
    images && images.length > 0 ? images[0] : '/static/images/default-post-image.jpg'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          {/* Featured Image */}
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-72 md:h-80 lg:h-96">
            <Image src={displayImage} alt={title} fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
              <PageTitle>
                <span className="text-white drop-shadow-lg">{title}</span>
              </PageTitle>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <header className="pb-6">
              <div className="flex flex-wrap items-center space-x-2">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </dl>
                <div className="h-4 border-l border-gray-300 dark:border-gray-700"></div>
                {tags && (
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className="grid grid-cols-1 gap-10 pb-8 lg:grid-cols-4">
              {/* Author Info - Left Sidebar */}
              <div className="lg:col-span-1">
                <dl className="sticky top-24 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
                  <dt className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Written by
                  </dt>
                  <dd>
                    <ul className="space-y-6">
                      {authorDetails.map((author) => (
                        <li className="flex flex-col items-center space-y-2" key={author.name}>
                          {author.avatar && (
                            <Image
                              src={author.avatar}
                              width={96}
                              height={96}
                              alt="avatar"
                              className="h-24 w-24 rounded-full"
                            />
                          )}
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              {author.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {author.occupation}
                            </p>
                            <div className="mt-2 flex justify-center space-x-3">
                              {author.twitter && (
                                <Link
                                  href={author.twitter}
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                  >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                  </svg>
                                </Link>
                              )}
                              {author.github && (
                                <Link
                                  href={author.github}
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
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
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>

              {/* Content - Main Column */}
              <div className="lg:col-span-3">
                <div className="prose dark:prose-invert max-w-none">{children}</div>

                {/* Footer Links */}
                <div className="mt-10 flex flex-col space-y-8 border-t border-gray-200 pt-10 dark:border-gray-700">
                  {/* Discuss and Edit Links */}
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                    <Link
                      href={`https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center text-sm text-gray-600 dark:text-gray-400"
                      rel="nofollow"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                      Discuss on Twitter
                    </Link>
                    {/* <Link
                      href={`${siteMetadata.siteRepo}/blob/main/data/${filePath}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                      View on GitHub
                    </Link> */}
                  </div>

                  {/* Comments Section */}
                  {siteMetadata.comments && (
                    <div
                      id="comment"
                      className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
                    >
                      <h3 className="mb-4 text-lg font-bold">Comments</h3>
                      <Comments slug={slug} />
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {prev && prev.path && (
                      <Link
                        href={`/${prev.path}`}
                        className="flex flex-col rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Previous Article
                        </span>
                        <span className="text-primary-500 mt-2 text-lg font-medium">
                          {prev.title}
                        </span>
                      </Link>
                    )}
                    {next && next.path && (
                      <Link
                        href={`/${next.path}`}
                        className="flex flex-col rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Next Article
                        </span>
                        <span className="text-primary-500 mt-2 text-lg font-medium">
                          {next.title}
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* Back to Blog */}
                  <div className="text-center">
                    <Link
                      href={`/${basePath}`}
                      className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
                      aria-label="Back to the blog"
                    >
                      &larr; Back to the blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
