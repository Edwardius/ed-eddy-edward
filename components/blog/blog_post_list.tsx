export default function BlogPostList({ posts }) {
  return (
    <div className="pr-6 flex-1 overflow-y-auto space-y-4 scrollbar-azuki">
      {posts.map((post) => (
        <article key={post.slug} className="bg-white p-5 rounded">
          <h2 className="text-xl font-700 font-title uppercase">{post.title}<span className='font-title text-gray-500 font-base font-600 pt-0.5 pl-2'>&#47;&#47;</span></h2>
          <p className="text-sm text-gray-300 font-mono">{post.date}</p>
          <div className="mt-4 text-gray-700 text-sm font-mono font-300">
            {post.content.substring(0, 200)}
          </div>
        </article>
      ))}
    </div>
  )
}
