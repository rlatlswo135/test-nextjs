// app/page.tsx
import { SearchBar } from "@/components/search-bar";
import { PostList } from "@/components/post-list";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  return res.json();
}

// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Articles about web development",
};

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <SearchBar />
      <PostList posts={posts} />
    </main>
  );
}
