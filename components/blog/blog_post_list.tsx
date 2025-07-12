import { useState } from 'react'
import { Link } from 'lucide-react'

export default function BlogPostList({ posts }) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  const handleCopyLink = async (slug: string) => {
    const link = `${window.location.origin}${window.location.pathname}#${slug}`
    try {
      await navigator.clipboard.writeText(link)
      setCopiedSlug(slug)
      setTimeout(() => setCopiedSlug(null), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <div className="pr-6 flex-1 overflow-y-auto space-y-4 scrollbar-azuki">
      {posts.map((post) => (
        <article
          key={post.slug}
          id={post.slug}
          className="relative bg-white p-5 rounded"
        >
          {/* Title and Tags */}
          <div className="flex justify-between items-start flex-wrap gap-y-2">
            <h2 className="text-xl font-700 font-title uppercase">
              {post.title}
              <span className="font-title text-gray-500 font-base font-600 pt-0.5 pl-2">
                &#47;&#47;
              </span>
            </h2>

            <div className="flex items-center gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full border border-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <button
                onClick={() => handleCopyLink(post.slug)}
                className="text-xs text-gray-400 hover:text-black transition font-mono flex items-center gap-1"
                title="Copy link"
              >
                <Link size={14} />
                {copiedSlug === post.slug ? 'Copied!' : 'Share'}
              </button>
            </div>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-300 font-mono">{post.date}</p>

          {/* Preview */}
          <div className="mt-4 text-gray-700 text-sm font-mono font-300">
            {post.content.substring(0, 200)}
          </div>
        </article>
      ))}
    </div>
  )
}
