// posts/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      const filtered = userId
        ? data.filter((p) => p.userId.toString() === userId)
        : data;
      setPosts(filtered);
    };

    fetchData();
  }, [userId]);

  return (
    <section>
      <h1 className="text-2xl mb-4">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-2 bg-gray-100 p-2 rounded">
          {post.title}
        </div>
      ))}
    </section>
  );
};

export default Posts;
