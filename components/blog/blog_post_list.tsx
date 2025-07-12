export default function BlogPostList({ posts }) {
  return (
    <div className="pr-6 flex-1 overflow-y-auto space-y-8 scrollbar-azuki">
      {posts.map((post) => (
        <article key={post.slug} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <div className="mt-4 text-gray-700 text-sm">
            {post.content.substring(0, 200)}...
          </div>
        </article>
      ))}
    </div>
  )
}
