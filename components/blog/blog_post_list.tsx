import { useEffect, useState } from 'react'
import { Link } from 'lucide-react'
import { Post } from './types/post'

export default function BlogPostList({ posts } : { posts: Post[] }) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null)

  const handleCopyLink = async (slug: string) => {
    const link = `${window.location.origin}${window.location.pathname}#${slug}`
    try {
      await navigator.clipboard.writeText(link)
      setCopiedSlug(slug)
      setTimeout(() => setCopiedSlug(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const hash = window.location.hash.slice(1) // Remove '#'
    if (hash) {
      setHighlightedSlug(hash)
      setTimeout(() => setHighlightedSlug(null), 2000)
    }
  }, [])

  return (
    <div className="pr-6 flex-1 overflow-y-auto space-y-4 scrollbar-azuki">
      {posts.map((post) => (
        <article
          key={post.slug}
          id={post.slug}
          className={`relative bg-white p-5 rounded transition ${
            highlightedSlug === post.slug ? 'blink' : ''
          }`}
        >
          {/* Title and Tags Row */}
          <div className="flex justify-between items-start flex-wrap gap-y-2">
            <h2 className="text-xl font-700 font-title uppercase">
              {post.title}
              <span className="font-title text-gray-500 font-base font-600 pt-0.5 pl-2">
                &#47;&#47;
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-black bg-opacity-5 rounded-full text-xs font-mono font-500 transition ease-in text-gray-700 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
              <button
                onClick={() => handleCopyLink(post.slug)}
                className="text-xs text-gray-400 hover:text-black transition font-mono"
                title="Copy shareable link"
              >
                {copiedSlug === post.slug ? 'Copied!' : <Link size={14} />}
              </button>
            </div>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-300 font-mono">{post.date}</p>

          {/* Content Preview */}
          <div className="mt-4 text-gray-700 text-sm font-mono font-300">
            {post.content.substring(0, 200)}
          </div>
        </article>
      ))}
    </div>
  )
}
