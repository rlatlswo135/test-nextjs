// app/page.tsx

async function getPosts() {
  // Fetch data directly in the component. No useEffect. No useState.
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts(); // await directly in the component

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
