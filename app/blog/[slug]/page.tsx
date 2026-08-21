import Link from "next/link";
import { notFound } from "next/navigation";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // params is a Promise in modern Next.js
  const post = await getPost(slug);

  if (!post) {
    notFound(); // renders your not-found.tsx, or a  default 404 page
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Link href="/" className="text-blue-600 hover:underline mb-6 block">
        Back to all posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </main>
  );
}
