import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    // Folder doesn't exist — return empty list to avoid crashing
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const processed = await remark().use(html).process(content)
        const contentHtml = processed.toString()

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || '',
          tags: data.tags || [],
          standalone: data.standalone || false,
          content: contentHtml,
        }
      })
  )

  return posts
}
