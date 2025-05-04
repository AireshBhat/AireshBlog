import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { writeFileSync } from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import { slug } from 'github-slugger'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import rehypeCitation from 'rehype-citation'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import GithubSlugger from 'github-slugger'
import rehypeKatex from 'rehype-katex'
import siteMetadata from './data/siteMetadata'

const root = process.cwd()

const computeToc = (doc) => {
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
  const slugger = new GithubSlugger()
  const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
    const flag = groups?.flag
    const content = groups?.content
    return {
      level: flag?.length || 0,
      text: content || '',
      slug: content ? slugger.slug(content) : '',
    }
  })

  return headings
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    lastmod: {
      type: 'date',
    },
    draft: {
      type: 'boolean',
    },
    summary: {
      type: 'string',
    },
    images: {
      type: 'list',
      of: { type: 'string' },
    },
    authors: {
      type: 'list',
      of: { type: 'string' },
    },
    layout: {
      type: 'string',
    },
    bibliography: {
      type: 'string',
    },
    canonicalUrl: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: 'json',
      resolve: (doc) => computeToc(doc),
    },
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images || [siteMetadata.socialBanner],
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    avatar: {
      type: 'string',
    },
    occupation: {
      type: 'string',
    },
    company: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    twitter: {
      type: 'string',
    },
    linkedin: {
      type: 'string',
    },
    github: {
      type: 'string',
    },
    bluesky: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
  },
}))

// New Project Document Type
export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    status: {
      type: 'string',
      options: ['Completed', 'In Progress', 'Planned'],
    },
    startDate: {
      type: 'date',
    },
    endDate: {
      type: 'date',
    },
    github: {
      type: 'string',
    },
    demo: {
      type: 'string',
    },
    role: {
      type: 'string',
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
    },
    team: {
      type: 'string',
    },
    featured: {
      type: 'boolean',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    path: {
      type: 'string',
      resolve: (doc) => `projects/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: 'json',
      resolve: (doc) => computeToc(doc),
    },
  },
}))

// New Project Log Document Type
export const ProjectLog = defineDocumentType(() => ({
  name: 'ProjectLog',
  filePathPattern: 'project-logs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    project: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc.project}/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Authors, Project, ProjectLog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkAlert],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const data = await importData()
    const { allBlogs, allProjects } = data
    console.log({ data })
    const tagCount = {}
    allBlogs.forEach((post) => {
      if (post.tags && !post.draft) {
        post.tags.forEach((tag) => {
          const formattedTag = slug(tag)
          if (formattedTag in tagCount) {
            tagCount[formattedTag] += 1
          } else {
            tagCount[formattedTag] = 1
          }
        })
      }
    })
    writeFileSync('./app/tag-data.json', JSON.stringify(tagCount))
  },
})
