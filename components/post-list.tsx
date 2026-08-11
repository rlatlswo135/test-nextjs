import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
type PostListProps = {
  posts: any;
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="space-y-4">
      {posts.map((post: { id: number; title: string; body: string }) => (
        <li
          key={post.id}
          className="border rounded-lg p-4 hover:border-gray-400 transition-colors"
        >
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-semibold hover:text-blue-600">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 mt-2 line-clamp-2">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
