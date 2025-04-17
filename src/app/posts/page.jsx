import Link from "next/link";

async function getData(userId) {
  const [postsRes, authorsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }),
    fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" }),
  ]);

  const [posts, authors] = await Promise.all([
    postsRes.json(),
    authorsRes.json(),
  ]);

  const filteredPosts = userId
    ? posts.filter((post) => post.userId.toString() === userId)
    : posts;

  return { posts: filteredPosts, authors };
}

export default async function PostsPage({ searchParams }) {
  const userId = await searchParams?.userId || null;
  const { posts, authors } = await getData(userId);

  return (
    <div className="flex justify-around items-start">
      <div className="w-[20%] flex flex-wrap justify-center mb-6">
        <h2 className="text-4xl font-bold text-center my-5">Authors</h2>
        <Link
          href="/posts"
          className="cursor-pointer w-[95%] h-[60px]
            rounded-md flex justify-center items-center text-center 
            transition font-semibold mb-2 bg-gray-200 hover:bg-gray-300"
        >
          Deselect Author
        </Link>
        {authors.map((author) => {
          const isSelected = userId === author.id.toString();
          return (
            <Link
              key={author.id}
              href={`/posts?userId=${author.id}`}
              className={`cursor-pointer w-[95%] h-[60px]
                rounded-md flex justify-center items-center text-center 
                transition font-semibold mb-2 ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {author.username} - {author.name}
            </Link>
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
              className="mb-2 bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
            >
              {index + 1}-{post.title}
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
}
