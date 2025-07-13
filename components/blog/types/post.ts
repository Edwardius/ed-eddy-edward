// types/post.ts

export type Post = {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
  standalone?: boolean
}