"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedUserId = searchParams.get("userId");

  useEffect(() => {
    const fetchData = async () => {
      const [postsRes, authorsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      const [postsData, authorsData] = await Promise.all([
        postsRes.json(),
        authorsRes.json(),
      ]);

      const filteredPosts = selectedUserId
        ? postsData.filter((post) => post.userId.toString() === selectedUserId)
        : postsData;

      setPosts(filteredPosts);
      setAuthors(authorsData);
    };

    fetchData();
  }, [selectedUserId]);

  const handleAuthorClick = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("userId", id);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-around items-start">
      <div className="w-[20%] flex flex-wrap justify-center mb-6 ">
        <h2 className="text-4xl font-bold text-center my-5">Authors</h2>
        <div
          onClick={() => handleAuthorClick("")}
          className="cursor-pointer w-[95%] h-[60px]
                rounded-md flex justify-center items-center text-center 
                transition font-semibold mb-2 bg-gray-200 hover:bg-gray-300"
        >
          Deselect Author
        </div>
        {authors.map((author) => {
          const isSelected = selectedUserId === author.id.toString();
          return (
            <div
              key={author.id}
              onClick={() => handleAuthorClick(author.id)}
              className={`cursor-pointer w-[95%] h-[60px]
                rounded-md flex justify-center items-center text-center 
                transition font-semibold mb-2 ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {author.username} - {author.name}
            </div>
          );
        })}
      </div>
      <section className="w-[80%]">
        <h2 className="text-4xl font-bold text-center my-5">Posts</h2>
        <section className="flex flex-col">
          {posts.map((post, index) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="mb-2 bg-gray-100 p-2 rounded"
            >
              {index + 1}-{post.title}
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
};

export default PostsPage;
